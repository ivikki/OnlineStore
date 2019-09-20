import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card";
import { AppContext } from "../../Context";
import s from "./ProductList.module.css";

export class ProductList extends React.Component {
  static contextType = AppContext;

  renderCard = () => {
    return this.context.products.length > 0 ? (
      <div className={s["wrapper-card"]}>
        {this.context.products.map(el => (
          <Card product={el} key={el.id} isAdmin={this.props.isAdmin} />
        ))}
      </div>
    ) : (
      <div className="h3">No Products. Is empty</div>
    );
  };

  render() {
    return <div className={s.wrapper}>{this.renderCard()}</div>;
  }
}
