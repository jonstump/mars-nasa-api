import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Mars, Curiosity}  from './mars.js';

let mars = Mars.weatherMars();
let curiosity = Curiosity.weatherRover();

function getElements(response, type) {
  if (response && (type === 'season')) {
    console.log(response);
    $('#showSeason').text(`The season is ${response['779'].Season}`);
  } else if (response) {
    $('#showTemp').text(`and the temperature is ${response.soles[0].max_temp} `);
  } else {
    $('#showErrors').text('I done told you there was an error');
  }
  
}

$(document).ready(function() {
  $("#exist").text(mars);
  Mars.weatherMars()
    .then(function(response) {
      getElements(response, 'season');
    });
  Curiosity.weatherRover(curiosity)
    .then(function(response) {
      getElements(response, 'temp');
    });
});