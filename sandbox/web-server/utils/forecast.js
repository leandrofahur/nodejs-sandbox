const request = require('request');

// // Function to forecast:

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=f0e16ba1c14b8281bc3f39a21b50d172&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude);

  request({ url, json: true }, (error, response) => {
    if(error) {
      callback('Unable to connect', undefined);
    } else if(response.body.error) {
      callback('Unable to fetch data', undefined);
    } else {
      const data = response.body.current;
      callback(undefined, `It is currently ${data.temperature} degrees, but it feels like ${data.feelslike} degrees.`);
    }
  });
};

module.exports = forecast;
