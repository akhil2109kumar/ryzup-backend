FROM node:20-alpine

WORKDIR /usr/src/main

COPY package*.json ./

RUN npm ci 

COPY . .


CMD [ "npm", "start" ]

