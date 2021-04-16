import React from "react";

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
