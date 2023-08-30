FROM node:16

WORKDIR /usr/src/app

# COPY package*.json ./

COPY . .
RUN npm install --production
RUN npm run build

CMD "npm" "start"