FROM node:20-alpine

RUN npm i -g nodemon

WORKDIR /app

RUN apk add curl

COPY package.json .

RUN npm i

COPY . .

EXPOSE 50053
EXPOSE 8083

CMD [ "npm","run","dev" ]