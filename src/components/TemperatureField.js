import PropTypes from "prop-types";
import { Input } from "@mui/material";

/**
 * Temerature display component.
 *
 * @param {*} props
 * @returns
 */
export default function TemperatureField({ value, onChange }) {
  return (
    <Input
      value={value}
      type="number"
      inputProps={{
        style: {
          fontSize: 98,
          textAlign: "center",
        },
      }}
      onChange={onChange}
      onFocus={(event) => event.target.select()}
      disableUnderline
    />
  );
}

TemperatureField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
