import PropTypes from "prop-types";

import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

import { temperatureUnits } from "../util.js";

/**
 * Custom styled Select component
 */
const UnitSelect = styled(Select)(({ theme }) => ({
  fontSize: 32,
  color: theme.palette.text.secondary,
}));

/**
 * Temperature unit selector.
 *
 * @param {*} props
 * @returns
 */
export default function UnitSelector({ value, onChange }) {
  return (
    <Box>
      <FormControl fullWidth>
        <UnitSelect value={value} onChange={onChange} variant="standard">
          {temperatureUnits.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </UnitSelect>
      </FormControl>
    </Box>
  );
}

UnitSelector.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
