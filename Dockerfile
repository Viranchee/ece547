FROM node:16
WORKDIR /usr/src/app
# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]
