FROM node:18
WORKDIR /usr/src/app
# Bundle app source
COPY --chown=node:node . .
EXPOSE 8080

CMD [ "node", "app.js" ]
