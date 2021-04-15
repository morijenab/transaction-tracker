import React from "react";
import PropTypes from "prop-types";

function DatePicker({ label, onBlur, name }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="date"
        className="base-input"
        onBlur={(e) => onBlur({ value: e.target.valueAsDate, name })}
        name={name}
      />
    </div>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string,
  onBlur: PropTypes.func,
};

export default DatePicker;
