import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./transition.css";
import { sortByDate } from "../helpers/transaction";
import { readData } from "../helpers/localStorage";
import CategoryFilter from "./CategoryFilter";
const initialState = () => sortByDate(readData());

function TransactionList() {
  const [list, setList] = React.useState(() => initialState());

  const filterChange = (e) => {
    const categoryType = e?.target?.value;
    const data = initialState();
    if (categoryType === "all") return setList(data);

    const filteredData = data?.filter?.((item) => item.type === categoryType);
    setList(filteredData);
  };
  return (
    <div className="transitions_list">
      <Link to="/transaction-entry" className="transitions-add-btn">
        {"+ ADD Transaction"}
      </Link>
      <CategoryFilter onChange={filterChange} />
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
