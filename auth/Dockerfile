# * dev build

# FROM node:20-alpine

# # Install build dependencies
# RUN apk add --no-cache make gcc g++ python3

# WORKDIR /app

# RUN npm i -g nodemon

# COPY package.json package-lock.json ./

# # Install dependencies and rebuild bcrypt
# RUN npm cache clean --force
# RUN npm ci && npm rebuild bcrypt --build-from-source

# # Clean up build dependencies to keep the image small
# RUN apk del make gcc g++ python3 && \
#   rm -rf /var/cache/apk/*

# COPY . .

# EXPOSE 50051 8081

# CMD [ "npm", "run", "dev" ]


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

EXPOSE 50051
EXPOSE 8081

CMD ["npm", "start"]