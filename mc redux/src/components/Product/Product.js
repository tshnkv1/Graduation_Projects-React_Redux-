import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { productPlusAC } from '../../redux/macStoreAC';

import './Product.scss';

class Product extends React.PureComponent {

  static propTypes = {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      //cbThisProduct: PropTypes.number.isRequired,
  };

  hundleButtonClikedPlus = (EO) => {
    console.log(this.props.id);
    this.props.dispatch( productPlusAC(this.props.id));
    //this.props.cbThisProduct(this.props.id);
  }

  render() {

    return (
      <div className="product">
          <div className="price">
              <div className="product-price">{this.props.price}<span> руб.</span></div>
          </div>
          <div className="product-info">
                <div className="product-name">{this.props.name}</div>
                <div className="product-select">
                    <button onClick={this.hundleButtonClikedPlus} className="product-plus">+</button>
                </div>
              </div>
      </div>
    )
    ;

  }

}

export default Product;
