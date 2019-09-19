import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import PropTypes from "prop-types";
import { Button } from "../Button";
import s from "./Card.module.css";

export class Card extends React.Component {
  static contextType = AppContext;

  renderImage = () => {
    return this.props.url ? (
      <img src={this.props.url} />
    ) : (
      <img src="http://www.vespogonag.ru/wp-content/uploads/2017/06/no-image-300x450.jpg" />
    );
  };

  removeCard = () => {
    this.context.removeCard(this.props.id);
  };

  renderCard = () => {
    return this.props.isAdmin ? (
      <div className={s.card}>
        <h3>Name: {this.props.name}</h3>
        <p>id: {this.props.id}</p>
        <p>Price: {this.props.price}$</p>
        <p>Quantity: {this.props.quantity}</p>
        <p>Status: {this.props.status}</p>
        <div>{this.renderImage()}</div>
        <Link to={`/admin/edit/${this.props.id}`}>
          <Button className={`btn-warning ${s.btn}`}>Edit Product</Button>
        </Link>
        <Button className={`btn-danger ${s.btn}`} fnClick={this.removeCard}>
          Remove Product
        </Button>
      </div>
    ) : (
      <Link to={`/product/${this.props.id}`}>
        <div className={s.card}>
          <h3>{this.props.name}</h3>
          <p>{this.props.price}$</p>
          <img src={this.props.url} />
        </div>
      </Link>
    );
  };

  render() {
    return <div className={s.wrapper}>{this.renderCard()}</div>;
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired,
  quantity: PropTypes.number,
  status: PropTypes.string,
  isAdmin: PropTypes.bool
};
