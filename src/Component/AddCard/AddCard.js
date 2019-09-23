import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import s from "./AddCard.module.css";
import { API } from "../../API";
import { Redirect } from "react-router-dom";

export class AddCard extends React.Component {
  state = {
    redirect: false
  };

  refTitle = React.createRef();
  refPrice = React.createRef();
  refQuantity = React.createRef();
  refUrl = React.createRef();
  refStock = React.createRef();

  handleClick = e => {
    e.preventDefault();
    let product = {
      title: this.refTitle.current.value,
      price: parseInt(this.refPrice.current.value),
      quantity: parseInt(this.refQuantity.current.value),
      image: this.refUrl.current.value,
      inStock: this.refStock.current.value === "true"
    };

    this.addCard(product).then(res => {
      if (res) {
        this.setState({
          redirect: true
        });
      } else {
        alert("Error. Component not added.");
      }
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/admin" />;
    }
  };

  async addCard(product) {
    let res = await API.addProduct(product);
    if (res) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.modal}>
          <h2 className="text-center">Add Product</h2>
          <form>
            <label>Title Product:</label>
            <input className="form-control" type="text" ref={this.refTitle} />
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
              <option value={true}>in Stock</option>
              <option value={false}>NOT in Stock</option>
            </select>
          </form>
          <div className={s.buttons}>
            {this.renderRedirect()}
            <Button
              className={`btn-primary ${s.button}`}
              onClick={this.handleClick}
            >
              Save
            </Button>
            <Link to={"/admin"}>
              <Button className={`btn-secondary ${s.button}`}>Cancel</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
