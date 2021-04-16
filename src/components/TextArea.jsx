import React from "react";
import PropTypes from "prop-types";
function TextArea({ label, name, onBlur, required, defaultValue }) {
  return (
    <div>
      <label>{label}</label>
      <textarea
        required={required}
        className="base-input"
        name={name}
        onBlur={(e) => onBlur({ value: e.target.value, name })}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
};
