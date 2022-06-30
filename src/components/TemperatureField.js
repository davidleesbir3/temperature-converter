import PropTypes from "prop-types";

import { Input } from "@mui/material";

export default function TemperatureField({ value, onChange }) {
  return (
    <Input
      value={value}
      inputProps={{
        style: {
          fontSize: 128,
          textAlign: "center",
        },
      }}
      onChange={onChange}
      disableUnderline
    />
  );
}

TemperatureField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
