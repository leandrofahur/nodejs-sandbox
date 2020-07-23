// Core modules:
const http = require('http');
const path = require('path');

// Third-party modules:
const express = require('express');
const bodyParser = require('body-parser');

// My modules:
const rootDir = require('./util/path');

// Routes:
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000, () => {
  console.log('Server is listening at port 3000');
})