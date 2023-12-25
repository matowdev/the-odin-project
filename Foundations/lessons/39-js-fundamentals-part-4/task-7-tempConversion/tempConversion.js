const convertToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;

  if (celsius !== 0 && !Number.isInteger(celsius)) {
    celsius = Number(celsius.toFixed(1));
  }

  return celsius;
};

console.log(convertToCelsius(32)); // 0
console.log(convertToCelsius(100)); // 37.8
console.log(convertToCelsius(-100)); // -73.3

const convertToFahrenheit = function (celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;

  if (fahrenheit !== 0 && !Number.isInteger(fahrenheit)) {
    fahrenheit = Number(fahrenheit.toFixed(1));
  }

  return fahrenheit;
};

console.log(convertToFahrenheit(0)); // 32
console.log(convertToFahrenheit(73.2)); // 163.8
console.log(convertToFahrenheit(-10)); // 14

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
