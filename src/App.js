import { useEffect, useState } from "react";

import {
  Container,
  Grid,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";

import "./App.css";
import theme from "./assets/theme";
import HeaderBar from "./components/Header";
import TemperatureField from "./components/TemperatureField";
import UnitSelector from "./components/UnitSelector";
import {
  fromCelsiusTo,
  fromFahrenheitTo,
  temperatureUnits,
  UNIT_CELSIUS,
  UNIT_FAHRENHEIT,
} from "./util.js";

/**
 * A Grid item component customized to be the container of
 * left and right halves of the app view
 */
const ColumnGridItem = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

function App() {
  const [leftTemperature, setLeftTemperature] = useState("0");
  const [rightTemperature, setRightTemperature] = useState("");
  const [leftUnit, setLeftUnit] = useState(temperatureUnits[0]);
  const [rightUnit, setRightUnit] = useState(temperatureUnits[1]);

  useEffect(() => {
    setRightTemperature(doCalculation(leftTemperature, leftUnit, rightUnit));
  }, []);

  /**
   * Update the both temperatures accordingly when the temperature
   * on the left is changed
   * @param {*} event
   */
  const handleLeftTemperatureChange = (event) => {
    const newLeftValue = event.target.value;
    const newRightValue = doCalculation(newLeftValue, leftUnit, rightUnit);
    setLeftTemperature(newLeftValue);
    setRightTemperature(newRightValue);
  };

  /**
   * Update the both temperatures accordingly when the unit
   * on the left is changed
   * @param {*} event
   */
  const handleLeftUnitChange = (event) => {
    const newLeftUnit = event.target.value;
    let newRightUnit = newLeftUnit === rightUnit ? leftUnit : rightUnit;

    setLeftUnit(newLeftUnit);
    setRightUnit(newRightUnit);

    const newRightValue = doCalculation(
      leftTemperature,
      newLeftUnit,
      newRightUnit
    );

    setRightTemperature(newRightValue);
  };

  /**
   * Update the both temperatures accordingly when the temperature
   * on the right is changed
   * @param {*} event
   */
  const handleRightTemperatureChange = (event) => {
    const newRightValue = event.target.value;
    const newLeftValue = doCalculation(newRightValue, rightUnit, leftUnit);
    setLeftTemperature(newLeftValue);
    setRightTemperature(newRightValue);
  };

  /**
   * Update the both temperatures accordingly when the unit
   * on the right is changed
   * @param {*} event
   */
  const handleRightUnitChange = (event) => {
    const newRightUnit = event.target.value;
    let newLeftUnit = newRightUnit === leftUnit ? rightUnit : leftUnit;

    setLeftUnit(newLeftUnit);
    setRightUnit(newRightUnit);

    const newLeftValue = doCalculation(
      rightTemperature,
      newRightUnit,
      newLeftUnit
    );
    setLeftTemperature(newLeftValue);
  };

  /**
   * A helper function that, with the provided temperature and unit, calculates the temperature in toUnit.
   * A string representing the resulting temperature is returned
   * @param {string} fromTemperature
   * @param {string} fromUnit
   * @param {string} toUnit
   *
   * @returns A string representing the resulting temperature
   */
  const doCalculation = (fromTemperature, fromUnit, toUnit) => {
    const inputValue = parseFloat(fromTemperature);
    let outputValue = null;

    if (isNaN(inputValue)) {
      return "";
    }

    switch (fromUnit) {
      case UNIT_CELSIUS:
        outputValue = fromCelsiusTo(inputValue, toUnit);
        break;
      case UNIT_FAHRENHEIT:
        outputValue = fromFahrenheitTo(inputValue, toUnit);
        break;
      default:
        break;
    }

    // Display at most 3 places after decimal points. In the case of something like
    // "2.100", the trailing zeros should be removed, so "2.1" will be displayed.
    const fixed = outputValue.toFixed(3),
      str = outputValue.toString();
    return parseFloat(fixed) === parseFloat(str) ? str : fixed;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HeaderBar />

        <Container>
          <Grid container spacing={0} sx={{ minHeight: "100vh" }}>
            <ColumnGridItem item xs={12} sm={5}>
              <TemperatureField
                value={leftTemperature}
                onChange={handleLeftTemperatureChange}
              />
              <UnitSelector
                options={temperatureUnits}
                value={leftUnit}
                onChange={handleLeftUnitChange}
              />
            </ColumnGridItem>
            <ColumnGridItem item xs={12} sm={2}>
              <Typography variant="h1" color={"primary"}>
                =
              </Typography>
            </ColumnGridItem>
            <ColumnGridItem item xs={12} sm={5}>
              <TemperatureField
                value={rightTemperature}
                onChange={handleRightTemperatureChange}
              />
              <UnitSelector
                options={temperatureUnits}
                value={rightUnit}
                onChange={handleRightUnitChange}
              />
            </ColumnGridItem>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
