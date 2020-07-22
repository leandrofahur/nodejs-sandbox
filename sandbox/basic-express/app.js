// Core modules:
const http = require('http');

// Third-party modules:
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
  res.send('<h1>Hello from express...</h1>');
});

app.get('/add-product', (req, res, next) => {
  res.send(`
      <body>
        <h1>Insert an message</h1>
          <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Submit</button>
          </form>
      </body>
    `);
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('Server is listening at port 3000');
})