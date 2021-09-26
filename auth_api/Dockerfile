FROM node:alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm i
EXPOSE 5000
COPY . .
