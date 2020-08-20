import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ProductsPage from "./components/ProductsPage";
import CartPage from "./components/CartPage";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <Link to="/">ProductsPage</Link>
          <Link to="/cart">CartPage</Link>
        </div>
        <Switch>
          <Route exact path="/" component={ProductsPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
