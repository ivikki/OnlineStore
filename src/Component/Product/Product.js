import React from "react";
import { AppContext } from "../../Context";
import s from "./Product.module.css";

export class Product extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <div className={s.wrapper}>
        <h2>Hi!</h2>
      </div>
    );
  }
}
