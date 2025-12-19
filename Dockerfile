FROM node:20

WORKDIR /app

# Fix npm CI issues
RUN npm install -g npm@latest

COPY package*.json ./

# More stable than npm ci in Docker
RUN npm install

COPY . .

# Build NestJS app
RUN npm run build

EXPOSE 3333

CMD ["npm", "run", "start:docker"]
