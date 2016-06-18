'use strict'

const apiKey = 'c64faea16c17df04e149a90549bd8065';
const ForecastIO = require('forecast-io');
const request = require('request');

/**
* Code  to manage standered request and response should go here
**/
module.exports = {
    getForecastSummery: function(id, sucesscb, failcb) {
    var url = 'https://api.forecast.io/forecast/'+apiKey+'/'+id;

    request(url, function (error, response, body) {

    if(error){
        failcb(error);
        return;
    }

    if(response.statusCode !== 200){
        failcb(response);
        return;


    }
    //All is good. Print the body
      sucesscb(response);
      return;

    });
  }

}
