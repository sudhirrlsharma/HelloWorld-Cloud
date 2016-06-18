'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var forecastIO = require('./service/forecastIO');

  var weather = new express.Router();
  function wetherRoute() {
  weather.use(cors());
  weather.use(bodyParser());
  weather.use(bodyParser.urlencoded({ extended: true }));
  weather.use(bodyParser.json());
  weather.get('/location/:id', function(req, res) {
    var locatonID = req.params.id;
    forecastModule.getForecastSummery(locatonID, function(weatherResponse){
      res.json("weather": JSON.parse(weatherResponse));

    },function(weatherErr){
      res.json(JSON.parse(weatherErr));

    });
  });

  return weather;
}

module.exports = wetherRoute;
