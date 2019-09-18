import React from "react";
import { AppContext } from "../../Context";
import { Link } from "react-router-dom";
import img from "./stock.png";
import s from "./Product.module.css";

export class Product extends React.Component {
  static contextType = AppContext;

  state = {};

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

  renderImage = () => {
    return this.state.status === "in Stock" ? (
      <div className={s.image}>
        <img className={s.img} src={this.state.url} alt={this.state.name} />
      </div>
    ) : (
      <div className={s.image}>
        <img className={s.stock} src={img} />
        <img className={s.img} src={this.state.url} alt={this.state.name} />
      </div>
    );
  };

  render() {
    return (
      <div className={s.wrapper}>
        <Link to="/">
          <button type="button" className={`btn btn-lg btn-warning ${s.btn}`}>
            Close
          </button>
        </Link>
        <div className={s.product}>
          <div className={s.about}>
            <mark>id: {this.state.id}</mark>
            <p>Name: {this.state.name}</p>
            <p>Price: {this.state.price}$</p>
            <p>Quantity: {this.state.quantity}</p>
          </div>
          {this.renderImage()}
        </div>
      </div>
    );
  }
}
