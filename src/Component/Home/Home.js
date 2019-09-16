import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import { Card } from "../Card";
import s from "./Home.module.css";

export class Home extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <div className={s.wrapper}>
        <h2 className="display-4">Product List</h2>
        <Link to={"/admin"} onClick={this.stopPropagation}>
          <button className={`btn btn-secondary btn-lg active ${s.btn}`}>
            Admin
          </button>
        </Link>
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
      </div>
    );
  }
}
