// Core modules:
const path = require('path');

// Third-party modules:
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: "Weather App"
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: "About Me",
    name: "Leandro machado"
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: "Help",
    message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, facilis exercitationem. Iusto, culpa? Inventore, consequatur."
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: "It is sunny for now",
    location: 'Surrey'
  })
});

app.get('*', (req, res) => {
  res.send('Error Page')
});

app.listen(3000, () => {
  console.log('Server is up and listening port 3000');
});