FROM node:20-alpine
LABEL authors="Kevin"

#esto es donde va a trabajar en el contendor
WORKDIR /app 

#lo que quiero copiar de mi localhost a mi dockerhost,  el package lo hago primero para que cuando yo corra el npm install funcione.
COPY package*.json ./
RUN npm install

#aqui estaria copiando del context que defini en mi docker-compose a mi workdir
COPY . .

EXPOSE 3027

CMD ["npm", "run", "start:dev"]