#!/bin/sh
# Start script for confd base image with supervisor

# Shell setup
unalias -a
hash -r
set -o nounset
set -o errexit

# You can also set the basic options from the environment
backend=${CONFD_BACKEND:-"etcd"}
client_ca_keys=""
client_cert=""
client_key=""
interval=${CONFD_INTERVAL:-600}
node=${CONFD_NODE:-""}
prefix=${CONFD_PREFIX:-"/"}
scheme=${CONFD_SCHEME:-"http"}
srv_domain=""
watch=0
print_usage=0

USAGE="
Usage:
This is a subset of the confd command line arguments. The biggest difference
is that I have both short options and long options, with the long options
denoted by the standard double dash instead of a single dash:
  -b|--backend=\"$backend\"
  --client-ca-keys=\"$client_ca_keys\"
  --client-cert=\"$client_cert\"
  --client-key=\"$client_key\"
  -i|--interval=$interval
  -n|--node=[$node]
  -p|--prefix=\"$prefix\"
  -s|--scheme=\"$scheme\"
  --srv-domain=\"$srv_domain\"
  -w|--watch
  -h|--help
"

# Parse command line options
OPTS=$(getopt -n $0 -o b:i:n:p:s:wh \
	--long backend:,client-ca-keys:,client-cert:,interval:,node:,prefix:,scheme:,srv-domkain:,watch,help \
	-- "$@")
if [ $? != 0 ] ; then
	echo "Problem parsing command line" >&2
	echo "$USAGE"
	exit 1
fi
eval set -- "$OPTS"

while true ; do
	case "$1" in
		-b|--backend) backend="$2" ; shift 2 ;;
		--client-ca-keys) client_ca_keys="$2" ; shift 2 ;;
		--client-cert) client_cert="$2" ; shift 2 ;;
		--client-key) client_key="$2" ; shift 2 ;;
		-i|--interval) interval="$2" ; shift 2 ;;
		-n|--node) node="$2" ; shift 2 ;;
		-p|--prefix) prefix="$2" ; shift 2 ;;
		-s|--scheme) scheme="$2" ; shift 2 ;;
		--srv-domain) srv_domain="$2" ; shift 2 ;;
		-w|--watch) watch=1 ; shift ;;
		-h|--help) print_usage=1 ; shift ;;
		--) break ;;
		*) echo "Internal command line error" >&2 ; echo "$USAGE" ; exit 1 ;;
	esac
done

if [ "$print_usage" != 0 ] ; then
	echo "$USAGE"
	exit 0
fi

# Build confd command line
declare -a confd_options
# Options that should always be set to something
confd_options=(
	"-backend" "$backend" \
	"-interval" "$interval" \
	"-prefix" "$prefix" \
	"-scheme" "$scheme" \
	)
# Optional arguments
if [ -n "$client_ca_keys" ] ; then
	confd_options+=( "-client-ca-keys" "$client_ca_keys" )
fi
if [ -n "$client_cert" ] ; then
	confd_options+=( "-client-cert" "$client_cert" )
fi
if [ -n "$client_key" ] ; then
	confd_options+=( "-client-key" "$client_key" )
fi
if [ -n "$node" ] ; then
	confd_options+=( "-node" "$node" )
fi
if [ -n "$srv_domain" ] ; then
	confd_options+=( "-srv-domain" "$srv_domain" )
fi
if [ "$watch" != 0 ] ; then
	confd_options+=( "-watch" )
fi


# Do a quick onetime run of confd to initialize the configuration
/opt/confd -onetime "${confd_options[@]}"

# Add supervisor configuration to run confd, the printf is to preserve argument quoting
args=$(printf " %q" "${confd_options[@]}")
cat > /etc/supervisor/conf.d/confd.conf <<CONFD
[program:confd]
command=/usr/bin/confd $args
CONFD

# Start supervisor, which will start the confd server and whatever the base user configured
/usr/bin/supervisord --nodaemon