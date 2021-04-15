import React from "react";

function TextArea({ label, name, onBlur }) {
  return (
    <div>
      <label>{label}</label>
      <textarea
        className="base-input"
        name={name}
        onBlur={(e) => onBlur({ value: e.target.value, name })}
      />
    </div>
  );
}

export default TextArea;
