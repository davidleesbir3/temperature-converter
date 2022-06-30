import "./App.css";

import { Grid } from "@mui/material";

import { useEffect, useState } from "react";
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

function App() {
  const [leftTemperature, setLeftTemperature] = useState("0");
  const [rightTemperature, setRightTemperature] = useState("");
  const [leftUnit, setLeftUnit] = useState(temperatureUnits[0]);
  const [rightUnit, setRightUnit] = useState(temperatureUnits[1]);

  useEffect(() => {
    const newRightValue = doCalculation(leftTemperature, leftUnit, rightUnit);
    setRightTemperature(newRightValue === null ? "" : newRightValue);
  }, []);

  const handleLeftTemperatureChange = (event) => {
    const newLeftValue = event.target.value;
    const newRightValue =
      doCalculation(newLeftValue, leftUnit, rightUnit) || "";
    setLeftTemperature(newLeftValue);
    setRightTemperature(newRightValue);
  };

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
    setRightTemperature(newRightValue === null ? "" : newRightValue);
  };

  const handleRightTemperatureChange = (event) => {
    const newRightValue = event.target.value;
    const newLeftValue =
      doCalculation(newRightValue, rightUnit, leftUnit) || "";
    setLeftTemperature(newLeftValue);
    setRightTemperature(newRightValue);
  };

  const handleRightUnitChange = (event) => {
    const newRightUnit = event.target.value;
    let newLeftUnit = newRightUnit === leftUnit ? rightUnit : leftUnit;

    setLeftUnit(newLeftUnit);
    setRightUnit(newRightUnit);

    const newRightValue = doCalculation(
      leftTemperature,
      newLeftUnit,
      newRightUnit
    );
    setRightTemperature(newRightValue === null ? "" : newRightValue);
  };

  const doCalculation = (fromTemperature, fromUnit, toUnit) => {
    const inputValue = parseFloat(fromTemperature);
    let outputValue = null;

    console.log(
      `doCalculation - input value: ${inputValue}, input unit: ${fromUnit}, output unit: ${toUnit}`
    );

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

    const fixed = outputValue.toFixed(3),
      str = outputValue.toString();

    return parseFloat(fixed) === parseFloat(str) ? str : fixed;
  };

  return (
    <div className="App">
      <HeaderBar />

      <Grid container spacing={0} sx={{ minHeight: "640px" }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TemperatureField
            value={leftTemperature}
            onChange={handleLeftTemperatureChange}
          />
          <UnitSelector
            options={temperatureUnits}
            value={leftUnit}
            onChange={handleLeftUnitChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TemperatureField
            value={rightTemperature}
            onChange={handleRightTemperatureChange}
          />
          <UnitSelector
            options={temperatureUnits}
            value={rightUnit}
            onChange={handleRightUnitChange}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
