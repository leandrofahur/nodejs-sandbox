// Core modules:
const http = require('http');

// Third-party modules:
const express = require('express');


const app = express();
app.use((req, res, next) => {
  console.log('Hello from the middleware!');
  next();
});

app.use((req, res, next) => {
  console.log('Hello from the middleware 2!');
});

const server = http.createServer(app);
server.listen(3000);
