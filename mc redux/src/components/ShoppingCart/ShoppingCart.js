import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import { productDeleteAC, productPlusAC, productMinusAC } from '../../redux/macStoreAC';

import './ShoppingCart.scss';

class ShoppingCart extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  };

  handleClickPlus = () => {
    //console.log(this.props.id);
    this.props.dispatch(productPlusAC(this.props.id));
  }

  handleClickMinus = () => {
    //console.log(this.props.id);
    this.props.dispatch(productMinusAC(this.props.id));
  }

  handleClickRemove = () => {
    console.log(this.props.id);
    this.props.dispatch(productDeleteAC(this.props.id));
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

export default connect()(ShoppingCart);