import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import { Card } from "../Card";
import { Button } from "../Button";
import s from "./Home.module.css";
import { ProductList } from "../ProductList";

export class Home extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <div className={s.wrapper}>
        <h2 className="display-4">Product List</h2>
        <Link to="/admin">
          <Button className={`btn-secondary btn-lg active ${s.btn}`}>
            Admin
          </Button>
        </Link>
        <ProductList isAdmin={false} />
      </div>
    );
  }
}
