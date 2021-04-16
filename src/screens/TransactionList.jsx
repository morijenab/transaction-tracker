import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./transition.css";
import { sortByDate } from "../helpers/transaction";
import { readData } from "../helpers/localStorage";
const initialState = () => sortByDate(readData());

function TransactionList() {
  const [list] = React.useState(() => initialState());
  return (
    <div className="transitions_list">
      <Link to="/transaction-entry" className="transitions-add-btn">
        {"+ ADD Transaction"}
      </Link>

      {list?.map?.((item) => (
        <Card
          key={item.id}
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
