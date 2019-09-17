import React from "react";
import s from "./EditCard.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";

export class EditCard extends React.Component {
  state = {};
  static contextType = AppContext;

  refId = React.createRef();
  refName = React.createRef();
  refPrice = React.createRef();
  refQuantity = React.createRef();
  refUrl = React.createRef();
  refStock = React.createRef();

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    const products = this.context.products;
    for (let i = 0; i < products.length; i++) {
      var product = {};
      if (products[i].id === id) {
        product = products[i];
        return product;
      }
    }
    console.log(product);
    // const product = products.find(p => p.id === id);
    // this.setState({
    //   id: product.id,
    //   name: product.name,
    //   price: product.price,
    //   url: product.url,
    //   quantity: product.quantity,
    //   status: product.status
    // });
  }

  handleClick = () => {
    let value = {
      id: this.refId.current.value,
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
              value={this.state.id}
            />
            <label>Name Product:</label>
            <input
              className="form-control"
              type="text"
              ref={this.refName}
              value={this.state.name}
            />
            <label>Price Product:</label>
            <input
              className="form-control"
              type="number"
              ref={this.refPrice}
              value={this.state.price}
            />
            <label>Quantity Product:</label>
            <input
              className="form-control"
              type="number"
              ref={this.refQuantity}
              value={this.state.quantity}
            />
            <label>Url Image Product:</label>
            <input
              className="form-control"
              type="text"
              ref={this.refUrl}
              value={this.state.url}
            />
            <label>Status Product:</label>
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
