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
    $("#showNorthSeasonTop").text("Northern Hemisphere:");
    $('#showNorthSeason').text(`${response[solDay].Northern_season}`);
    $("#showNorthSeasonBottom").text("Southern Hemisphere:");
    $('#showSouthSeason').text(`${response[solDay].Southern_season}`);
  } else if (response) {
    $('#showTempMax').text(`Max: ${response.soles[0].max_temp} ° F`);
    $('#showTempMin').text(`Min: ${response.soles[0].min_temp} ° F`);
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