import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import { Card } from "../Card";
import { Button } from "../Button";
import s from "./Home.module.css";

export class Home extends React.Component {
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
            isAdmin={false}
          />
        ))}
      </div>
    ) : (
      <div className="h3">No Products. Is empty</div>
    );
  };

  render() {
    return (
      <div className={s.wrapper}>
        <h2 className="display-4">Product List</h2>
        <Link to={"/admin"}>
          <Button className={`btn-secondary btn-lg active ${s.btn}`}>
            Admin
          </Button>
        </Link>
        {this.renderCard()}
      </div>
    );
  }
}
