import React from "react";
import s from "./Card.module.css";

export class Card extends React.Component {
  renderCard = () => {
    return this.props.isAdmin ? (
      <div>
        <p>id: {this.props.id}</p>
        <h3>{this.props.name}</h3>
        <p>{this.props.price}$</p>
        <img src={this.props.url} />
        <button type="button" className={`btn btn-warning ${s.btn}`}>
          Edit Product
        </button>
        <button type="button" className={`btn btn-danger ${s.btn}`}>
          Remove Product
        </button>
      </div>
    ) : (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.price}$</p>
        <img src={this.props.url} />
      </div>
    );
  };

  render() {
    return <div className={s.wrapper}>{this.renderCard()}</div>;
  }
}
