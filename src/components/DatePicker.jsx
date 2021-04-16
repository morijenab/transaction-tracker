import React from "react";
import PropTypes from "prop-types";

function DatePicker({ label, onBlur, name, required, defaultValue }) {
  return (
    <div>
      <label>{label}</label>
      <input
        required={required}
        type="date"
        className="base-input"
        onBlur={(e) => onBlur({ value: e.target.value, name })}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string,
  onBlur: PropTypes.func,
};

export default DatePicker;
