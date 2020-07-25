// Core modules:
const path = require('path');

// Third-party modules:
const express = require('express');
const hbs = require('hbs');

// Util modules:
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
  if(!req.query.address) {
    return res.send({
      error: 'The address is required'
    })
  }
   
  geocode(req.query.address, (error, data) => {
    if(error) {
      return res.send({
        error
      })
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if(error) {
        return res.send({
          error
        })
      }
      res.send({
        forecast: forecastData,
        location: data.location
      })
    });
  });
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