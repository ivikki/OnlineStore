import React from "react";
import { AppContext } from "../../Context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../Home";
import { Admin } from "../Admin";
import { AddCard } from "../AddCard";
import { EditCard } from "../EditCard";

export class App extends React.Component {
  state = {
    products: [
      {
        id: 111,
        name: "Iphone",
        price: 500,
        url:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone8-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1550795431127",
        quantity: 5,
        status: "in Stock"
      }
    ]
  };

  addCard = product => {
    let products = this.state.products.slice();
    products.push(product);
    this.setState({
      products
    });
  };

  removeCard = index => {
    let products = this.state.products.slice();
    products.splice(index, 1);
    this.setState({
      products
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          addCard: this.addCard,
          removeCard: this.removeCard
        }}
      >
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={Admin} />
          {console.log(this.state.products)}
          <Route path="/add" component={AddCard} />
          <Route path="/edit:id" component={EditCard} />
        </Router>
      </AppContext.Provider>
    );
  }
}
