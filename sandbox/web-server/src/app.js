const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
})

app.get('/help', (req, res) => {
  res.send([{
    name: "Leandro"
  }, {
    name: "Sarah"
  }])
})

app.get('/about', (req, res) => {
  res.send('<h1>About Page<h1>')
})

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