FROM node:18:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm i sharp

EXPOSE 3000

CMD [ "npm", "start"]
