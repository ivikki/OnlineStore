import React from "react";
import { AppContext } from "../../Context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../Home";
import { Admin } from "../Admin";
import { AddCard } from "../AddCard";
import { EditCard } from "../EditCard";
import { Product } from "../Product";

export class App extends React.Component {
  editCard = product => {
    let products = this.state.products.map(el => {
      if (el.id !== product.id) {
        return el;
      }
      return product;
    });

    this.setState({
      products
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          editCard: this.editCard
        }}
      >
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/add" component={AddCard} />
          <Route path="/admin/edit/:id" component={EditCard} />
          <Route path="/product/:id" component={Product} />
        </Router>
      </AppContext.Provider>
    );
  }
}
