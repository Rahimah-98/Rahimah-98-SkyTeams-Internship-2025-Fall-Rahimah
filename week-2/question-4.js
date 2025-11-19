// Temperature converter (Celsius ↔ Fahrenheit)

function convertTemperature(unit, value) {
  if (unit === 'c') {
    // Celsius -> Farenheit
    return value * (9 / 5) + 32;
  } else if (unit === 'f') {
    // Farenheit -> Celsius
    return value - (32 * 5) / 9;
  } else {
    return 'Invalid unit! Use "c" for Celsius or "f" for Fahrenheit.';
  }
}

console.log(convertTemperature('c', 10)); //50
