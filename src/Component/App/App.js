import React from "react";
import { AppContext } from "../../Context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../Home";
import { Admin } from "../Admin";
import { AddCard } from "../AddCard";
import { EditCard } from "../EditCard";
import { Product } from "../Product";

export class App extends React.Component {
  state = {
    products: [
      {
        id: 111,
        name: "Iphone",
        price: 500,
        url:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone8-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1550795431127",
        quantity: 25,
        status: "NOT in Stock"
      },
      {
        id: 222,
        name: "Samsung",
        price: 300,
        url:
          "https://images.samsung.com/is/image/samsung/p5/ie/galaxy-fold/pcd/feature_benefit_kv_galaxy_fold_spcae_silver.png?$ORIGIN_PNG$",
        quantity: 53,
        status: "in Stock"
      },
      {
        id: 333,
        name: "Meizu",
        price: 200,
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQZw9-IAQ1F7FlzljFsh2nJfQzQkFMk47YjCEwRE5Vzq7OVUv",
        quantity: 153,
        status: "in Stock"
      },
      {
        id: 444,
        name: "Xiomi",
        price: 250,
        url:
          "https://i.xiaomi.ua/u/CatalogueImage/xiaomi-redmi-7-0043187151553184456f22171f22264.jpg",
        quantity: 0,
        status: "NOT in Stock"
      }
    ]
  };

  addCard = product => {
    let products = this.state.products.slice();
    let element = this.state.products.find(el => el.id === product.id);
    if (!element) {
      products.push(product);
    } else {
      alert(
        "It is not possible to add a product. \nProduct with that ID already exists"
      );
    }

    this.setState({
      products
    });
  };

  removeCard = id => {
    let products = this.state.products.filter(el => el.id !== id);
    this.setState({
      products
    });
  };

  editCard = product => {
    let products = this.state.products.map(el => {
      if (el.id !== product.id) {
        return el;
      } else {
        return product;
      }
    });

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
          removeCard: this.removeCard,
          editCard: this.editCard
        }}
      >
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={Admin} />
          {console.log(this.state.products)}
          <Route path="/admin/add" component={AddCard} />
          <Route path="/admin/edit/:id" component={EditCard} />
          <Route path="/product/:id" component={Product} />
        </Router>
      </AppContext.Provider>
    );
  }
}
