import React from "react";
// import PropTypes from "prop-types";
import "./wallet.css";
import { WalletContext } from "../context/walletProvider";
const today = () => {
  const today = new Date();
  return today.toLocaleDateString("en-US");
};

const Wallet = (props) => {
  const { wallet } = React.useContext(WalletContext);

  return (
    <div className="wallet">
      <div className="wallet_left_side">
        <span>{"Wallet Balance"}</span>
        <span>
          {"$"}
          {wallet}
        </span>
      </div>
      <div className="wallet_right_side">
        <span>{today()}</span>
        <span>{"USD"}</span>
      </div>
    </div>
  );
};

// Wallet.propTypes = {};

export default Wallet;
