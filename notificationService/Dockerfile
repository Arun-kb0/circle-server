# * dev build

# FROM node:20-alpine

# RUN npm i -g nodemon

# WORKDIR /app

# RUN apk add curl

# COPY package.json .

# RUN npm i

# COPY . .

# EXPOSE 50056
# EXPOSE 8086
# EXPOSE 5086


# CMD [ "npm","run","dev" ]


# * prod build

#* Build Stage
FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add curl

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# * Production Stage
FROM node:20-alpine
WORKDIR /app

RUN apk add curl

COPY package*.json ./
RUN npm install --production

COPY --from=builder /app/build ./build

EXPOSE 50056
EXPOSE 8086
EXPOSE 5086

CMD ["npm", "start"]
