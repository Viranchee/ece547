FROM node:16
WORKDIR /usr/src/app
# Bundle app source
COPY . .
EXPOSE 8080/tcp
EXPOSE 8080/udp

CMD [ "node", "app.js" ]
