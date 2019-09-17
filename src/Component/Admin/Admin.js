import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card";
import { AppContext } from "../../Context";
import s from "./Admin.module.css";

export class Admin extends React.Component {
  static contextType = AppContext;

  renderCard = () => {
    return this.context.products.length > 0 ? (
      <div className={s["wrapper-card"]}>
        {this.context.products.map(el => (
          <Card
            key={el.id}
            name={el.name}
            price={el.price}
            url={el.url}
            id={el.id}
            quantity={el.quantity}
            status={el.status}
            isAdmin={true}
          />
        ))}
      </div>
    ) : (
      <div className="h3">Is empty</div>
    );
  };

  render() {
    return (
      <div className={s.wrapper}>
        <h2 className="display-4">Product List</h2>
        <Link to={"/add"}>
          <button type="button" className={`btn btn-lg btn-success ${s.btn}`}>
            Add Product
          </button>
        </Link>
        {this.renderCard()}
      </div>
    );
  }
}
