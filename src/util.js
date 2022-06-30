const UNIT_CELSIUS = "Celsius",
  UNIT_FAHRENHEIT = "Fahrenheit";

const temperatureUnits = [UNIT_CELSIUS, UNIT_FAHRENHEIT];

function fromCelsiusTo(temperature, toUnit) {
  switch (toUnit) {
    case UNIT_FAHRENHEIT:
      return (temperature * 9) / 5 + 32;
    case UNIT_CELSIUS:
    default:
      return temperature;
  }
}

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
