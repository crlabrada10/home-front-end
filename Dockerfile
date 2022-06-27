FROM nginx:alpine
COPY /dist/gastos-home /usr/share/nginx/html
EXPOSE 80