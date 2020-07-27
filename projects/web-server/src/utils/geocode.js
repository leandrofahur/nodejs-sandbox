const request = require('request');

// Function to retrieve the location from the forecast to a geolocation:

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/` + encodeURIComponent(address) + `.json?access_token=pk.eyJ1IjoibGVhbmRyb2ZhaHVyIiwiYSI6ImNqemJpeHAzdzAwcXgzbW1ub2p5YXlxZWwifQ.0jquNUq8yTAfeiVV6SDVkg`;

  request({ url, json: true }, (error, response) => {
    if(error) {
      callback('Unable to connect', undefined);
    } else if(response.body.features.length === 0) {
      callback('Unable to fetch data', undefined);
    } else {
      callback(undefined, { 
        latitude: response.body.features[0].center[1], 
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;