import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import { productDeleteAC, productPlusAC, productMinusAC } from '../../redux/macStoreAC';

import './ShoppingCart.scss';

class ShoppingCart extends React.PureComponent {

  static propTypes = {
    basket: PropTypes.array.isRequired,
  };

  handleClickPlus = (EO) => {
    this.props.dispatch(productPlusAC(this.props.basket.id));
  }

  handleClickMinus = (EO) => {
    this.props.dispatch(productMinusAC(this.props.basket.id));
  }

  handleClickRemove = (EO) => {
    console.log(this.props.basket.id);
    this.props.dispatch(productDeleteAC(this.props.basket.id));
  }



  render() {

    return (
      <div className="ShoppingCart" key={this.props.basket.id}>
        <div className="name">{this.props.basket.name}</div>
        <div className="count">{this.props.basket.count}</div>
        <button onClick={this.handleClickPlus} className="plus">+</button>
        <button onClick={this.handleClickMinus} className="minus">&minus;</button>
        <button onClick={this.handleClickRemove} className="remove">&times;</button>
      </div>
    )
    ;

  }

}
const mapStateToProps = function (state) {
  return {
    basket: state.macStore.basket,
  };
};

export default connect(mapStateToProps)(ShoppingCart);