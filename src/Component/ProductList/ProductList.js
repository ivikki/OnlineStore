import React from "react";
import { Card } from "../Card";
import s from "./ProductList.module.css";
import { API } from "../../API";

export class ProductList extends React.Component {
  state = {
    products: [],
    totalPages: 1
  };

  componentDidMount() {
    let size = 6;
    let page = 0;
    API.getProducts({ size, page }).then(res => {
      if (res.status !== 200) {
        alert("server error");
      } else {
        this.setState({
          products: res.body.content,
          pageNumber: res.body.pageNumber,
          totalPages: res.body.totalPages
        });
      }
    });
  }

  deleteCallback = id => {
    let products = this.state.products.filter(el => {
      if (el.id !== id) {
        return el;
      }
    });
    this.setState({
      products
    });
  };

  changePage = page => {
    let size = 6;
    API.getProducts({ size, page }).then(res => {
      if (res.status !== 200) {
        alert("server error");
      } else {
        this.setState({
          products: res.body.content
        });
      }
    });
  };

  renderPagesNumber = () => {
    if (this.state.totalPages > 1) {
      let pages = [];
      for (let i = 0; i < this.state.totalPages; i++) {
        pages.push(i + 1);
      }
      return (
        <ul className={s.pages}>
          {pages.map(el => (
            <li
              key={el}
              className={s.page}
              onClick={() => this.changePage(el - 1)}
            >
              {el}
            </li>
          ))}
        </ul>
      );
    }
  };

  renderCards = () => {
    return this.state.products.length > 0 ? (
      <div>
        <div className={s["wrapper-card"]}>
          {this.state.products.map(el => (
            <Card
              product={el}
              key={el.id}
              deleteCallback={this.deleteCallback}
              isAdmin={this.props.isAdmin}
            />
          ))}
        </div>
        {this.renderPagesNumber()}
      </div>
    ) : (
      <div className="h3">No Products. Is empty</div>
    );
  };

  render() {
    return <div className={s.wrapper}>{this.renderCards()}</div>;
  }
}
