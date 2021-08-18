import React from 'react';
import PropTypes from 'prop-types';

import './ShoppingCart.scss';

class ShoppingCart extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    cbPlusproduct: PropTypes.func.isRequired,
    cbMinusproduct: PropTypes.func.isRequired,
    cbRemoveproduct: PropTypes.func.isRequired,
  };

  handleClickPlus = (EO) => {
    this.props.cbPlusproduct(this.props.id);
  }

  handleClickMinus = (EO) => {
    this.props.cbMinusproduct(this.props.id);
  }

  handleClickRemove = (EO) => {
    this.props.cbRemoveproduct(this.props.id);
  }



  render() {

    return (
      <div className="ShoppingCart" key={this.props.id}>
        <div className="name">{this.props.name}</div>
        <div className="count">{this.props.count}</div>
        <button onClick={this.handleClickPlus} className="plus">+</button>
        <button onClick={this.handleClickMinus} className="minus">&minus;</button>
        <button onClick={this.handleClickRemove} className="remove">&times;</button>
      </div>
    )
    ;

  }

}

export default ShoppingCart;