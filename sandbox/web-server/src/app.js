// Core modules:
const path = require('path');

// Third-party modules:
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/weather', (req, res) => {
  res.send({
    forecast: "It is sunny for now",
    location: 'Surrey'
  })
})

app.get('*', (req, res) => {
  res.send('Error Page')
})


app.listen(3000, () => {
  console.log('Server is up and listening port 3000');
})