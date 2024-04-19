FROM node:18.16.0

WORKDIR /app

COPY ./EventServiceOrder ./

RUN npm install

EXPOSE 80:3000

CMD ["npm", "start:dev"]
