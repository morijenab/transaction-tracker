import React from "react";
import PropTypes from "prop-types";
import "./categoryFilter.css";
const CategoryFilter = ({ onChange }) => {
  return (
    <fieldset className="categoryFilter_box">
      <legend className="categoryFilter_legend">{"Filter"}</legend>
      <div onChange={onChange} className="categoryFilter">
        <input
          type="radio"
          name="categoryFilter"
          value="all"
          id="category-all"
          defaultChecked={true}
        />
        <label htmlFor="category-all">{"all"}</label>
        <input
          type="radio"
          name="categoryFilter"
          value="income"
          id="category-income"
        />
        <label htmlFor="category-income">{"income"}</label>
        <input
          type="radio"
          name="categoryFilter"
          value="expense"
          id="category-expense"
        />
        <label htmlFor="category-expense">{"expense"}</label>
      </div>
    </fieldset>
  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func,
};

export default CategoryFilter;
