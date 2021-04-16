import * as React from "react";
import { readData } from "../helpers/localStorage";
import { aggregateWallet } from "../helpers/wallet";
import PropTypes from "prop-types";
export const WalletContext = React.createContext();

const walletBalance = () => {
  const data = readData();
  const balance = aggregateWallet(data);
  return balance;
};

const walletReducer = (state, action) => {
  switch (action.type) {
    case "income": {
      return { wallet: state.wallet + action.payload };
    }
    case "expense": {
      return { wallet: state.wallet - action.payload };
    }
    case "delete": {
      return { wallet: state.wallet - action.payload };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
function WalletProvider({ children }) {
  const [state, dispatch] = React.useReducer(walletReducer, {
    wallet: walletBalance(),
  });

  const value = { wallet: state.wallet, dispatch };
  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}

WalletProvider.propTypes = {
  children: PropTypes.node,
};
export { WalletProvider };
