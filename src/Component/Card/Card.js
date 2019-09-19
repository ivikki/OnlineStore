import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import PropTypes from "prop-types";
import { Button } from "../Button";
import img from "./no-image-300x450.jpg";
import s from "./Card.module.css";

export class Card extends React.Component {
  static contextType = AppContext;

  renderImage = () => {
    const { product } = this.props;
    return product.url ? <img src={product.url} /> : <img src={img} />;
  };

  removeCard = () => {
    this.context.removeCard(this.props.product.id);
  };

  renderCard = () => {
    const { product, isAdmin } = this.props;
    return isAdmin ? (
      <div className={s.card}>
        <h3>Name: {product.name}</h3>
        <p>id: {product.id}</p>
        <p>Price: {product.price}$</p>
        <p>Quantity: {product.quantity}</p>
        <p>Status: {product.status}</p>
        <div>{this.renderImage()}</div>
        <Link to={`/admin/edit/${product.id}`}>
          <Button className={`btn-warning ${s.btn}`}>Edit Product</Button>
        </Link>
        <Button className={`btn-danger ${s.btn}`} onClick={this.removeCard}>
          Remove Product
        </Button>
      </div>
    ) : (
      <Link to={`/product/${product.id}`}>
        <div className={s.card}>
          <h3>{product.name}</h3>
          <p>{product.price}$</p>
          <img src={product.url} />
        </div>
      </Link>
    );
  };

  render() {
    return <div className={s.wrapper}>{this.renderCard()}</div>;
  }
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool
};
