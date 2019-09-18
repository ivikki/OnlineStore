import React from "react";
import s from "./EditCard.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";

export class EditCard extends React.Component {
  state = {};
  static contextType = AppContext;

  refName = React.createRef();
  refPrice = React.createRef();
  refQuantity = React.createRef();
  refUrl = React.createRef();
  refStock = React.createRef();

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    let product = this.context.products.find(el => el.id === id);
    this.setState({
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      quantity: product.quantity,
      status: product.status
    });
  }

  editClick = () => {
    let value = {
      id: this.state.id,
      name: this.refName.current.value,
      price: this.refPrice.current.value,
      quantity: this.refQuantity.current.value,
      url: this.refUrl.current.value,
      status: this.refStock.current.value
    };
    this.context.editCard(value);
  };

  changeValue = () => {
    this.setState({
      name: this.refName.current.value,
      price: this.refPrice.current.value,
      url: this.refUrl.current.value,
      quantity: this.refQuantity.current.value,
      status: this.refStock.current.value
    });
  };

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.modal}>
          <h2 className="text-center">Edit Product</h2>
          <form>
            <label>
              <mark>id: {this.state.id}</mark>
            </label>
            <label>Name Product:</label>
            <input
              className="form-control"
              type="text"
              ref={this.refName}
              value={this.state.name}
              onChange={this.changeValue}
            />
            <label>Price Product:</label>
            <input
              className="form-control"
              type="number"
              ref={this.refPrice}
              value={this.state.price}
              onChange={this.changeValue}
            />
            <label>Quantity Product:</label>
            <input
              className="form-control"
              type="number"
              ref={this.refQuantity}
              value={this.state.quantity}
              onChange={this.changeValue}
            />
            <label>Url Image Product:</label>
            <input
              className="form-control"
              type="text"
              ref={this.refUrl}
              value={this.state.url}
              onChange={this.changeValue}
            />
            <label className={s.status}>Status Product:</label>
            <select ref={this.refStock}>
              <option>in Stock</option>
              <option>NOT in Stock</option>
            </select>
          </form>
          <div className={s.buttons}>
            <Link to={"/admin"}>
              <button
                className={"btn btn-success " + s.button}
                onClick={this.editClick}
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
