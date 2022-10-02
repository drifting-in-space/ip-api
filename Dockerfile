FROM node:18-alpine

EXPOSE 8080

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm ci

COPY server.js /usr/src/app

CMD ["node", "server.js"]
