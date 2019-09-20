import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card";
import { AppContext } from "../../Context";
import s from "./Admin.module.css";
import { ProductList } from "../ProductList";

export class Admin extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <div className={s.wrapper}>
        <h2 className="display-4">Product List</h2>
        <Link to="/admin/add">
          <button type="button" className={`btn btn-lg btn-success ${s.btn}`}>
            Add Product
          </button>
        </Link>
        <ProductList isAdmin={true} />
      </div>
    );
  }
}
