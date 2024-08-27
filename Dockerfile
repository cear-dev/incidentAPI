from node:20.15.1

workdir /app

copy package*.json ./

run npm install

copy . .

run npm run build

expose 3000

cmd [ "node","dist/src/app.js" ]