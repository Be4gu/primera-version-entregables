FROM node:18-alpine AS latest

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN chown -R node:node /app/

EXPOSE 3000

USER node

CMD ["npm", "start"]