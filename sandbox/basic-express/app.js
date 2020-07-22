// Core modules:
const http = require('http');

// Third-party modules:
const express = require('express');
const bodyParser = require('body-parser');

// Routes:
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000, () => {
  console.log('Server is listening at port 3000');
})