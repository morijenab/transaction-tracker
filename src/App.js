import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TransactionForm from "./screens/TransactionsForm";
import TransactionList from "./screens/TransactionList";
import Wallet from "./screens/Wallet";
function App() {
  return (
    <div className="App">
      <Wallet />
      <Router>
        <Switch>
          <Route path={["/transaction-entry/:id", "/transaction-entry"]}>
            <TransactionForm />
          </Route>
          <Route path="/">
            <TransactionList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
