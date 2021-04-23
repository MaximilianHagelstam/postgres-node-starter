FROM node:lts

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .env ./dist/

WORKDIR /dist

EXPOSE 8080

CMD node src/server.js