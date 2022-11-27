FROM node:18
COPY ./ .
EXPOSE 3000

# command to run when intantiate an image
CMD ["npm","start"]
