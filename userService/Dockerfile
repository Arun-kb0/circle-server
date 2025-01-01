FROM node:20-alpine

RUN npm i -g nodemon

WORKDIR /app

RUN apk add curl

COPY package.json .

RUN npm i

COPY . .

EXPOSE 50052
EXPOSE 8082

CMD [ "npm","run","dev" ]