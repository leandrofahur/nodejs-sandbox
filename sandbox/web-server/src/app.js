// Core modules:
const path = require('path');

// Third-party modules:
const express = require('express');
const hbs = require('hbs');

const app = express();
const viewsDirectory = path.join(__dirname, '..', 'templates', 'views');
const partialsDirectory = path.join(__dirname, '..', 'templates', 'partials');;

// Handlebars setup:
app.set('view engine', 'hbs');
app.set('views', viewsDirectory);
hbs.registerPartials(partialsDirectory);

// Setup static directory to serve:
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: "Weather App",
    name: "Leandro machado"
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
    name: "Leandro machado",
    message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, facilis exercitationem. Iusto, culpa? Inventore, consequatur."
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: "It is sunny for now",
    location: 'Surrey'
  })
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: "Help",
    name: "Leandro machado",
    errorMessage: 'Help article not found'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: "Help",
    name: "Leandro machado",
    errorMessage: "Page not found..."
  });
});

app.listen(3000, () => {
  console.log('Server is up and listening port 3000');
});