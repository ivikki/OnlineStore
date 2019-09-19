import React from "react";
import PropTypes from "prop-types";

export class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
        className={`btn ${this.props.className}`}
        onClick={this.props.fnClick}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  fnClick: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};
