import React from "react";
import PropTypes from "prop-types";

function Select({ label, options, name, onChange, defaultValue }) {
  if (!options || options?.length < 1) return <></>;
  return (
    <div>
      <label>{label}</label>
      <select
        defaultValue={defaultValue}
        name={name}
        className="base-input"
        onChange={(e) => onChange({ value: e.target.value, name })}
      >
        {options?.map?.((item) => (
          <option value={item?.value} key={item?.id}>
            {item?.label}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default Select;
