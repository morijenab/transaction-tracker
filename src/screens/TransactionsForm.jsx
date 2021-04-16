import React from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import NumberInput from "../components/NumberInput";
import TextArea from "../components/TextArea";
import DatePicker from "../components/DatePicker";
import Select from "./../components/Select";
import { saveData } from "../helpers/localStorage";
import { WalletContext } from "../context/walletProvider";
import { isTransactionValid } from "../helpers/wallet";
import { deleteTransaction } from "../helpers/transaction";
const PAYMENT_OPTIONS = [
  { value: "income", label: "Income", id: 1 },
  { value: "expense", label: "Expense", id: 2 },
];

const initialState = { type: "income" };
const TransactionForm = () => {
  const [data, setDate] = React.useState(initialState);
  const { dispatch, wallet } = React.useContext(WalletContext);
  const history = useHistory();
  const { state = {} } = useLocation();
  const { amount, note, date, type, id } = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isTransactionValid(wallet, data.type, data.amount)) {
      saveData(data, id);
      dispatch({ type: data.type, payload: data.amount });
      history.push("/");
    } else {
      alert("sorry your wallet is less than what you wish :( ");
    }
  };

  const handleChange = ({ value, name }) => {
    setDate({ ...data, [name]: value });
  };

  const handleDelete = () => {
    // delete form DB
    deleteTransaction(id);
    // delete from global state
    dispatch({ type: "delete", payload: data.amount });
    history.push("/");
  };

  return (
    <div>
      <Link to="/" className="back-home-btn">
        {" "}
        {"<-back"}
      </Link>
      <form onSubmit={handleSubmit}>
        <NumberInput
          label="Enter amount"
          name={"amount"}
          autoFocus={true}
          min={1}
          required={true}
          onBlur={handleChange}
          defaultValue={amount}
        />
        <TextArea
          label="Note"
          name={"note"}
          onBlur={handleChange}
          required={true}
          defaultValue={note}
        />
        <DatePicker
          label={"Date"}
          onBlur={handleChange}
          name={"date"}
          required={true}
          defaultValue={date}
        />
        <Select
          label={"Category"}
          options={PAYMENT_OPTIONS}
          name={"type"}
          onChange={handleChange}
          defaultValue={type}
        />
        <div className={"action-area"}>
          <button
            className={"cancel-btn"}
            type="reset"
            onClick={() => {
              setDate(initialState);
            }}
          >
            Cancel
          </button>
          <button type="button" onClick={handleDelete}>
            delete
          </button>
          <button className={"save-btn"} type="submit">
            Save Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
