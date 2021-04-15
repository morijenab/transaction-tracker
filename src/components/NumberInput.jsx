import React from "react";

const NumberInput = ({ name, label, autoFocus, min, required, onBlur }) => {
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
      />
    </div>
  );
};

export default NumberInput;
