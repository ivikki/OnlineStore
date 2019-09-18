import React from "react";
import s from "./AddCard.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";

export class AddCard extends React.Component {
  static contextType = AppContext;

  refId = React.createRef();
  refName = React.createRef();
  refPrice = React.createRef();
  refQuantity = React.createRef();
  refUrl = React.createRef();
  refStock = React.createRef();

  handleClick = () => {
    let value = {
      id: parseInt(this.refId.current.value),
      name: this.refName.current.value,
      price: this.refPrice.current.value,
      quantity: this.refQuantity.current.value,
      url: this.refUrl.current.value,
      status: this.refStock.current.value
    };
    this.context.addCard(value);
  };

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.modal}>
          <h2 className="text-center">Add Product</h2>
          <form>
            <label>Id Product:</label>
            <input
              className="form-control"
              name="id"
              type="number"
              ref={this.refId}
            />
            <label>Name Product:</label>
            <input className="form-control" type="text" ref={this.refName} />
            <label>Price Product:</label>
            <input className="form-control" type="number" ref={this.refPrice} />
            <label>Quantity Product:</label>
            <input
              className="form-control"
              type="number"
              ref={this.refQuantity}
            />
            <label>Url Image Product:</label>
            <input className="form-control" type="text" ref={this.refUrl} />
            <label className={s.status}>Status Product:</label>
            <select ref={this.refStock}>
              <option>in Stock</option>
              <option>NOT in Stock</option>
            </select>
          </form>
          <div className={s.buttons}>
            <Link to={"/admin"}>
              <button
                className={"btn btn-primary " + s.button}
                onClick={this.handleClick}
              >
                Save
              </button>
            </Link>
            <Link to={"/admin"}>
              <button className={"btn btn-secondary " + s.button}>
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
