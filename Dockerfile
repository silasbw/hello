FROM node:slim

COPY . /app
WORKDIR /app
RUN npm i

EXPOSE 8080

CMD ["npm", "start"]
