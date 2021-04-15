import React from "react";
import NumberInput from "../components/NumberInput";
import TextArea from "../components/TextArea";
import DatePicker from "../components/DatePicker";
import Select from "./../components/Select";
const PAYMENT_OPTIONS = [
  { value: "income", label: "Income", id: 1 },
  { value: "expense", label: "Expense", id: 2 },
];

const Transaction = () => {
  const [data, setDate] = React.useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("transaction", JSON.stringify(data));
    console.log(data);
  };

  const handleChange = ({ value, name }) => {
    setDate({ ...data, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <NumberInput
          label="Enter amount"
          name={"amount"}
          autoFocus={true}
          min={1}
          required={true}
          onBlur={handleChange}
        />
        <TextArea label="Note" name={"note"} onBlur={handleChange} />
        <DatePicker label={"Date"} onBlur={handleChange} name={"date"} />
        <Select
          label={"Category"}
          options={PAYMENT_OPTIONS}
          name={"type"}
          onChange={handleChange}
        />
        <div className={"action-area"}>
          <button
            className={"cancel-btn"}
            type="reset"
            onClick={() => setDate({})}
          >
            Cancel
          </button>
          <button className={"save-btn"} type="submit">
            Save Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transaction;
