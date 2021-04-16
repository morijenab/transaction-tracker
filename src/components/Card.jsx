import React from "react";
import "./card.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { INCOME, EXPENSE } from "../utilities/constants";
const Card = ({ id, type, note, amount, date }) => {
  return (
    <Link
      to={{
        pathname: `/transaction-entry/${id}`,
        state: { id, type, note, amount, date },
      }}
    >
      <div className="card">
        <span className="card_id">{id}</span>
        <span className="card_divider"> {"|"} </span>
        <div className="card_right_side">
          <div className="card_type_note">
            <span className="card_type">{type}</span>
            <span className="card_note">{note}</span>
          </div>
          <span
            style={{
              color: type === INCOME ? "green" : "red",
              fontWeight: 500,
              fontSize: 20,
            }}
          >
            {type === INCOME ? "+" : "-"}
            {"$"}
            {amount}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number,
  type: PropTypes.oneOf([INCOME, EXPENSE]),
  note: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.string,
};
