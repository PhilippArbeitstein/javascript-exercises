const convertToCelsius = function(kelvin) {
  return kelvin == 32 ? 0 : Number(((kelvin-32)*(5/9)).toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  return celcius == 0 ? 32 : Number((celcius*(9/5)+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
