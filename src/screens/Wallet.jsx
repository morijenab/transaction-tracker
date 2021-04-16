import React from "react";
// import PropTypes from "prop-types";
import "./wallet.css";
import { readData } from "../helpers/localStorage";
import { aggregateWallet } from "../helpers/aggregateWallet";
const today = () => {
  const today = new Date();
  return today.toLocaleDateString("en-US");
};

const walletBalance = () => {
  const data = readData();
  const balance = aggregateWallet(data);
  console.log(balance);
  return balance;
};

const Wallet = (props) => {
  return (
    <div className="wallet">
      <div className="wallet_left_side">
        <span>Wallet Balance</span>
        <span>${walletBalance()}</span>
      </div>
      <div className="wallet_right_side">
        <span>{today()}</span>
        <span>USD</span>
      </div>
    </div>
  );
};

// Wallet.propTypes = {};

export default Wallet;
