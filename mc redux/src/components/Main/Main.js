import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import './Main.scss';

import Product from '../Product/Product';

import mainBanner from '../../images/main-banner.jpeg';

class Main extends React.PureComponent {

  static propTypes = {
    catalogProduct:PropTypes.array.isRequired,
  }

  render() {
    console.log(this.props.catalogProduct);

    const oneprod = this.props.catalogProduct.map( v =>
      <Product key={v.id}
        id={v.id}
        name={v.name}
        price={v.price}
        />
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
const mapStateToProps = function (state) {
  return {
    catalogProduct: state.macStore.catalog,
  };
};

export default connect(mapStateToProps)(Main);
