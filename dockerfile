FROM node:16.20.2
WORKDIR /app
COPY . .
RUN npm i -g @nestjs/cli
RUN npm install -g nodemon
RUN npm i 
EXPOSE 3000
CMD [ "npm", "run","start:dev" ]
