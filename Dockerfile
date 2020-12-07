FROM nginx:1.19-alpine

WORKDIR /usr/share/nginx/html
#RUN apt-get update

ENV NGINX_PORT 80

EXPOSE 80

COPY ./build .
COPY ./templates /etc/nginx/templates

CMD ["nginx", "-g", "daemon off;"]

