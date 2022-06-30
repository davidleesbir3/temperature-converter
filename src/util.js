// Constants serving as enum for supported temperature units
const UNIT_CELSIUS = "Celsius",
  UNIT_FAHRENHEIT = "Fahrenheit";

// Supported temperatures
const temperatureUnits = [UNIT_CELSIUS, UNIT_FAHRENHEIT];

/**
 * Helper function that converts a temperature in Celsius to the
 * corresponding value in the specified unit
 * @param {Number} temperature
 * @param {string} toUnit
 * @returns the converted temperature
 */
function fromCelsiusTo(temperature, toUnit) {
  switch (toUnit) {
    case UNIT_FAHRENHEIT:
      return (temperature * 9) / 5 + 32;
    case UNIT_CELSIUS:
    default:
      return temperature;
  }
}

/**
 * Helper function that converts a temperature in Fahrenheit to the
 * corresponding value in the specified unit
 * @param {Number} temperature
 * @param {string} toUnit
 * @returns the converted temperature
 */
function fromFahrenheitTo(temperature, toUnit) {
  switch (toUnit) {
    case UNIT_CELSIUS:
      return ((temperature - 32) * 5) / 9;
    case UNIT_FAHRENHEIT:
    default:
      return temperature;
  }
}

export {
  UNIT_CELSIUS,
  UNIT_FAHRENHEIT,
  temperatureUnits,
  fromCelsiusTo,
  fromFahrenheitTo,
};
