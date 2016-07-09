FROM nginx:stable-alpine
MAINTAINER mosen <mosen@users.noreply.github.com>

COPY public /usr/share/nginx/html
