FROM node:lts-alpine as node
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.13
COPY --from=node /app/dist/docker-lab /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
CMD cd /usr/share/nginx/html && sed -i "s/changeit/$(hostname)/" main-es5.js && sed -i "s/changeit/$(hostname)/" main-es2015.js  && nginx -g 'daemon off;'