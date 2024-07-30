const convertToCelsius = function(tempF) {
  let minus = tempF - 32
  let tempC = minus / 1.8;
  return parseFloat(tempC.toFixed(1));
  // https://www.calculatorsoup.com/calculators/conversions/fahrenheit-to-celsius.php
};

const convertToFahrenheit = function(tempC) {
  let ninebyfive = 9/5;
  let tempF = tempC * ninebyfive + 32
  return parseFloat(tempF.toFixed(1));
  //https://www.calculatorsoup.com/calculators/conversions/celsius-to-fahrenheit.php

};

// number.toFixed(decimal_digits);
// parseFloat(number.toFixed(decimal_digits);)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
