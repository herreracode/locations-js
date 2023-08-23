FROM node

EXPOSE 8000

WORKDIR /app

RUN npm install -g typescript ts-node