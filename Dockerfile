FROM nginx:stable-alpine
MAINTAINER mosen <mosen@users.noreply.github.com>

# Credit to enil/alpine-supervisor-docker
ENV PYTHON_VERSION=2.7.11-r3
ENV PY_PIP_VERSION=7.1.2-r0
ENV SUPERVISOR_VERSION=3.2.0

RUN apk update && apk add -u python=$PYTHON_VERSION py-pip=$PY_PIP_VERSION
RUN pip install supervisor==$SUPERVISOR_VERSION

# confd stuff
RUN mkdir -p /etc/confd/{conf.d,templates}
ADD ./.docker/conf.d /etc/confd/conf.d
ADD ./.docker/templates /etc/confd/templates
ADD ./.docker/confd /usr/bin/confd
RUN chmod +x /usr/bin/confd

COPY ./.docker/start.sh /start.sh
RUN chmod +x /start.sh

# web app
COPY public /usr/share/nginx/html

ENTRYPOINT /start.sh


