import React from "react";

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
