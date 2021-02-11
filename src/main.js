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
    let solDay = `${response.sol_keys[6]}`;
    console.log(solDay);
    $('#showSeason').text(`The season is ${response[solDay].Northern_season}`);
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