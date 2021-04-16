import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./transition.css";
const initialState = () => localStorage.getItem("transactions");

function TransactionList() {
  const [list] = React.useState(() => JSON.parse(initialState()));
  return (
    <div className="transitions_list">
      <Link to="/transaction-entry" className="transitions-add-btn">
        + ADD Transaction
      </Link>

      {list?.map?.((item, index) => (
        <Card
          key={index}
          id={item.id}
          type={item.type}
          note={item.note}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default TransactionList;
