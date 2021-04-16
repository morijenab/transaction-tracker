import React from "react";
import PropTypes from "prop-types";

const NumberInput = ({
  name,
  label,
  autoFocus,
  min,
  required,
  onBlur,
  defaultValue,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        required={required}
        name={name}
        className="base-input"
        autoFocus={autoFocus}
        min={min}
        onBlur={(e) => {
          onBlur({ value: e.target.valueAsNumber, name });
        }}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default NumberInput;

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  min: PropTypes.number,
  required: PropTypes.bool,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.number,
};
