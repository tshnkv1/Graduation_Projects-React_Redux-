import React from 'react';
import PropTypes from 'prop-types';

import './Main.scss';

import Product from '../Product/Product';

import mainBanner from '../../images/main-banner.jpeg';

class Main extends React.Component {

  static propTypes = {
    catalogProduct:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        cbAddProduct: PropTypes.func.isRequired,
      })
    ),
  }



  cbChoseProduct = (productID) => {
    this.props.cbAddProduct(productID);
  }

  render() {

    const oneprod = this.props.catalogProduct.map( v =>
      <Product key={v.id}
        id={v.id}
        name={v.name}
        price={v.price}
        cbThisProduct={this.cbChoseProduct}/>
      )
    

    return (
      <div className="main-container">
        <div className="mainHeader">
        <h1 className="mc-products-header">Меню</h1>
        </div>
        <div className="main">
          <img className="mainbanner" src={mainBanner}/>
        </div>
        <div className="main-contant">
          {oneprod}
        </div>
      </div>
    )
    ;

  }

}

export default Main;
