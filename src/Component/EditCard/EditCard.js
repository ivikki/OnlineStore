import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import { Button } from "../Button";
import s from "./EditCard.module.css";
import { API } from "../../API";

export class EditCard extends React.Component {
  static contextType = AppContext;

  state = {
    product: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    API.getProduct(id).then(res =>
      this.setState({
        product: res
      })
    );
  }

  editProduct = () => {
    let product = {
      id: this.state.product.id,
      title: this.state.product.title,
      price: parseInt(this.state.product.price),
      quantity: parseInt(this.state.product.quantity),
      image: this.state.product.image,
      inStock: this.state.product.inStock === "true"
    };
    this.context.editCard(product);
  };

  changeValue = e => {
    let product = { ...this.state.product };
    product[e.target.name] = e.target.value;
    this.setState({
      product
    });
  };

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.modal}>
          <h2 className="text-center">Edit Product</h2>
          <form>
            <label>
              <mark>id: {this.state.product.id}</mark>
            </label>
            <label>Name Product:</label>
            <input
              className="form-control"
              type="text"
              name="title"
              ref={this.refTitle}
              value={this.state.product.title}
              onChange={this.changeValue}
            />
            <label>Price Product:</label>
            <input
              className="form-control"
              type="number"
              name="price"
              ref={this.refPrice}
              value={this.state.product.price}
              onChange={this.changeValue}
            />
            <label>Quantity Product:</label>
            <input
              className="form-control"
              type="number"
              name="quantity"
              ref={this.refQuantity}
              value={this.state.product.quantity}
              onChange={this.changeValue}
            />
            <label>Url Image Product:</label>
            <input
              className="form-control"
              type="text"
              ref={this.refUrl}
              name="image"
              value={this.state.product.image}
              onChange={this.changeValue}
            />
            <label className={s.status}>Status Product:</label>
            <select
              ref={this.refStock}
              value={this.state.product.inStock}
              name="inStock"
              onChange={this.changeValue}
            >
              <option value={true}>in Stock</option>
              <option value={false}>NOT in Stock</option>
            </select>
          </form>
          <div className={s.buttons}>
            <Link to={"/admin"}>
              <Button
                className={`btn-success + ${s.button}`}
                onClick={this.editProduct}
              >
                Save
              </Button>
            </Link>
            <Link to={"/admin"}>
              <Button className={`btn-secondary ${s.button}`}>Cancel</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
