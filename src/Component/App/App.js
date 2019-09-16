import React from "react";
import { AppContext } from "../../Context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../Home";
import { Admin } from "../Admin";

export class App extends React.Component {
  state = {
    products: [
      {
        name: "Iphone",
        price: 500,
        url: "https://hotline.ua/img/tx/207/2070817155.jpg",
        id: 123
      },
      {
        name: "Iphone",
        price: 500,
        url: "https://hotline.ua/img/tx/207/2070817155.jpg",
        id: 1773
      },
      {
        name: "Iphone",
        price: 500,
        url: "https://hotline.ua/img/tx/207/2070817155.jpg",
        id: 143
      },
      {
        name: "Iphone",
        price: 500,
        url: "https://hotline.ua/img/tx/207/2070817155.jpg",
        id: 14783
      }
    ]
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products
        }}
      >
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={Admin} />
        </Router>
      </AppContext.Provider>
    );
  }
}
