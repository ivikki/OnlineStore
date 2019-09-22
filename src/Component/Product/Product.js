import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import img from "./stock.png";
import s from "./Product.module.css";
import { API } from "../../API";

export class Product extends React.Component {
  state = {
    product: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    API.getProduct(id).then(res =>
      this.setState({
        product: res.body
      })
    );
  }

  renderImage = () => {
    return this.state.product.inStock ? (
      <div className={s.image}>
        <img
          className={s.img}
          src={this.state.product.image}
          alt={this.state.product.title}
        />
      </div>
    ) : (
      <div className={s.image}>
        <img className={s.stock} src={img} />
        <img
          className={s.img}
          src={this.state.product.image}
          alt={this.state.product.title}
        />
      </div>
    );
  };

  render() {
    return (
      <div className={s.wrapper}>
        <Link to="/">
          <Button className={`btn-lg btn-warning ${s.btn}`}>Close</Button>
        </Link>
        {console.log("product", this.state.product)}
        <div className={s.product}>
          <div className={s.about}>
            <mark>id: {this.state.product.id}</mark>
            <p>Name: {this.state.product.title}</p>
            <p>Price: {this.state.product.price}$</p>
            <p>Quantity: {this.state.product.quantity}</p>
          </div>
          {this.renderImage()}
        </div>
      </div>
    );
  }
}
