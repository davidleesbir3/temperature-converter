import PropTypes from "prop-types";

import { Box, FormControl, MenuItem, Select } from "@mui/material";

import { temperatureUnits } from "../util.js";

export default function UnitSelector({ value, onChange }) {
  return (
    <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <Select
          labelId="input-unit-select"
          id="input-unit-select"
          value={value}
          onChange={onChange}
          variant="standard"
        >
          {temperatureUnits.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

UnitSelector.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
