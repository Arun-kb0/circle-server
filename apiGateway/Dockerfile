# * dev build

FROM node:20-alpine

# Install necessary packages
RUN apk add --no-cache \
  linux-headers \
  python3 \
  py3-pip \
  build-base \
  && ln -sf /usr/bin/python3 /usr/bin/python

# Set up a virtual environment and install invoke
RUN python3 -m venv /opt/venv \
  && . /opt/venv/bin/activate \
  && pip install --upgrade pip \
  && pip install --no-cache-dir invoke

# Add virtual environment to PATH for subsequent commands
ENV PATH="/opt/venv/bin:$PATH"

RUN npm i -g nodemon

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 5001
EXPOSE 5080
EXPOSE 4000-4020


CMD [ "npm","run","dev" ]

# * prod build

# #* Build Stage
# FROM node:20-alpine AS builder
# WORKDIR /app

# RUN apk add curl

# COPY package*.json ./
# RUN npm install

# COPY . .

# RUN npm run build

# # * Production Stage
# FROM node:20-alpine
# WORKDIR /app

# RUN apk add curl

# COPY package*.json ./
# RUN npm install --production

# COPY --from=builder /app/build ./build

# EXPOSE 5001
# EXPOSE 5080

# CMD ["npm", "start"]
