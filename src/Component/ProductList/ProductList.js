import React from "react";
import { Card } from "../Card";
import s from "./ProductList.module.css";
import { API } from "../../API";

export class ProductList extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    API.getProducts().then(res => {
      if (res.status !== 200) {
        alert("server error");
      } else {
        this.setState({
          products: res.body
        });
      }
    });
  }

  renderCards = () => {
    return this.state.products.length > 0 ? (
      <div className={s["wrapper-card"]}>
        {this.state.products.map(el => (
          <Card product={el} key={el.id} isAdmin={this.props.isAdmin} />
        ))}
      </div>
    ) : (
      <div className="h3">No Products. Is empty</div>
    );
  };

  render() {
    return <div className={s.wrapper}>{this.renderCards()}</div>;
  }
}
