import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import './ProductChosen.scss';

import ShoppingCart from '../ShoppingCart/ShoppingCart';

class ProductChosen extends React.PureComponent {

  static propTypes = {
    macStore:PropTypes.object.isRequired,
  }

  render() {
    
    console.log(this.props.macStore);
    const viewChoseProduct = this.props.macStore.basket.map( v =>
      <ShoppingCart  key={v.id}
      id={v.id}
      name={v.name}
      count={v.count}
      />
      );

    return (
      <div className="productChosen__container">
        <div className="title">Узнайте стоимость заказа и энергетическую ценность продуктов</div>
        <div className="selectedPrice">
          <div>Стоимость:</div>
          <div className="cost">{this.props.macStore.allsum.cost}</div> руб.
        </div>
        <div className="selectedProduct">
          <span>Мой заказ</span>
          <div className="basket">
            {
            this.props.macStore.prod
            ?viewChoseProduct
            :
            this.props.macStore.empty
            }
          </div>
        </div>
        <div className="energy">
          <div>кДж <span>{this.props.macStore.allsum.dzh}</span></div>
          <div>Энергетическая ценность, ккал <span>{this.props.macStore.allsum.cal}</span></div>
          <div>Белки, г <span>{this.props.macStore.allsum.squirrles}</span></div>
          <div>Жиры, г <span>{this.props.macStore.allsum.fats}</span></div>
          <div>Углеводы, г <span>{this.props.macStore.allsum.carbohydrates}</span></div>
        </div>
        <div className="norm">
          <div>Суточная норма калорий:</div>
          <div>- Мужчины: 2500, ккал</div>
          <div>- Женщины: 2000, ккал</div>
          <div>- Дети: 1600, ккал</div>
        </div>
      </div>
    )
    ;

  }

}

const mapStateToProps = function (state) {
  return {
    macStore: state.macStore,
  };
};

export default connect(mapStateToProps)(ProductChosen);
