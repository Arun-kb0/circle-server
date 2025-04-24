# * dev build

# FROM node:20-alpine

# # Install necessary packages
# RUN apk add --no-cache \
#   linux-headers \
#   python3 \
#   py3-pip \
#   build-base \
#   && ln -sf /usr/bin/python3 /usr/bin/python

# # Set up a virtual environment and install invoke
# RUN python3 -m venv /opt/venv \
#   && . /opt/venv/bin/activate \
#   && pip install --upgrade pip \
#   && pip install --no-cache-dir invoke

# # Add virtual environment to PATH for subsequent commands
# ENV PATH="/opt/venv/bin:$PATH"

# RUN npm i -g nodemon

# WORKDIR /app

# COPY package.json .

# RUN npm i

# COPY . .

# EXPOSE 5001
# EXPOSE 5080
# EXPOSE 4000-4020


# CMD [ "npm","run","dev" ]

# * prod build

# #* Build Stage
FROM node:20-alpine AS builder
WORKDIR /app

# 1) Install python3, pip, build tools, curl
RUN apk add --no-cache \
  linux-headers \
  python3 \
  py3-pip \
  build-base \
  curl \
  && ln -sf /usr/bin/python3 /usr/bin/python

# 2) Copy package.json & install ALL deps (dev + prod)
COPY package*.json ./
RUN npm install

# 3) Build your app
COPY . .
RUN npm run build

# 4) Prune devDependencies so node_modules now only has prod deps
RUN npm prune --production

# * prod
FROM node:20-alpine
WORKDIR /app

# If you need curl at runtime
RUN apk add --no-cache curl

# 1) Copy package.json + lockfile so npm knows your start script
COPY package*.json ./

# 2) Pull in the already‐installed production deps
COPY --from=builder /app/node_modules ./node_modules

# 3) Pull in your build output
COPY --from=builder /app/build       ./build

# 4) Expose ports
EXPOSE 5001
EXPOSE 5080
EXPOSE 4000-4020

# 5) Start via npm (now that package.json is present)
CMD ["npm", "start"]