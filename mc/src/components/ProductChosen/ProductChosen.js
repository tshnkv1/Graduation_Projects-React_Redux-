import React from 'react';
import PropTypes from 'prop-types';

import './ProductChosen.scss';

import ShoppingCart from '../ShoppingCart/ShoppingCart';

class ProductChosen extends React.PureComponent {

  static propTypes = {
    choseProduct:PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired,
            dzh: PropTypes.number.isRequired,
            cal: PropTypes.number.isRequired,
            squirrels: PropTypes.number.isRequired,
            fats: PropTypes.number.isRequired,
            carbohydrates: PropTypes.number.isRequired,
            cbdelete: PropTypes.func,
          })
    ),
  }

  state = {
    allchoseproduct: this.props.choseProduct, //здесь храняться хэши выбранных товаров
     // сумм всех категорий
    cost: 0,
    dzh: 0,
    cal: 0,
    squirrles: 0,
    fats: 0,
    carbohydrates: 0,   
    prod: true, //true - в корзине есть продукты, false - в корзине нет продуктов
    empty: "В корзине ничего нет", //значение которое показывается при prod: false
  }

  //подписка на события
  
  componentWillReceiveProps = (props) => {
    //console.log('componentWillReceiveProps');
    this.setState( {allchoseproduct: props.choseProduct})
  }

  componentDidUpdate = (oldProps, oldState) => {
    //console.log('componentDidUpdate')
    this.calculateCost();
    this.calculateDzh();
    this.calculateCal();
    this.calculateSquirrles();
    this.calculateFats();
    this.calculateCarbohydrates();
  }

  componentDidMount = () => {
    this.calculateCost();
    this.calculateDzh();
    this.calculateCal();
    this.calculateSquirrles();
    this.calculateFats();
    this.calculateCarbohydrates();
  }


  //подсчет всех сумм

  calculateCost = () => {
    var allSum = 0;
    this.state.allchoseproduct.map( v =>
      allSum += v.price * v.count
    )
    //проверка пустого хэша
    if(this.state.allchoseproduct.length == 0){
    this.setState({ prod: false})
    }
    else {
      this.setState({ prod: true})
    }
    //console.log(allSum);
    this.setState( { cost: allSum } );
  }

  calculateDzh = () => {
    var allDzh = 0;
    this.state.allchoseproduct.map( v =>
      allDzh += v.dzh * v.count
    )
    //console.log(allDzh);
    this.setState( { dzh: allDzh } );
  }

  calculateCal = () => {
    var allCal = 0;
    this.state.allchoseproduct.map( v =>
      allCal += v.cal * v.count
    )
    //console.log(allCal);
    this.setState( { cal: allCal } );
  }

  calculateSquirrles = () => {
    var allSquirrles = 0;
    this.state.allchoseproduct.map( v =>
      allSquirrles += v.squirrels * v.count
    )
    //console.log(allSquirrles);
    this.setState( { squirrles: allSquirrles } );
  }

  calculateFats = () => {
    var allFats = 0;
    this.state.allchoseproduct.map( v =>
      allFats += v.fats * v.count
    )
    //console.log(allFats);
    this.setState( { fats: allFats } );
  }
  
  calculateCarbohydrates = () => {
    var allCarbohydrates = 0;
    this.state.allchoseproduct.map( v =>
      allCarbohydrates += v.carbohydrates * v.count
    )
    //console.log(allCarbohydrates);
    this.setState( { carbohydrates: allCarbohydrates } );
  }


  //увеличение количества продукта в списке
  Plusproduct = (id) => {
    var plusCount =[...this.state.allchoseproduct];
    plusCount.map( v => {
      if(v.id == id) {
        v.count++;
      }
    })
    this.setState( {allchoseproduct: plusCount});
 }

  //уменьшение количества продукта в списке 
  Minusproduct = (id) => {
    var minusCount =[...this.state.allchoseproduct];
    minusCount.map( v => {
      if(v.id == id) {
        if(v.count > 1){
          v.count--;
        }
      }
    })
    //console.log(minusCount);
    this.setState( {allchoseproduct: minusCount});
  }

  //удаление продукта из списка
  Removeproduct = (id) => { 
    this.props.cbdelete(id);
    //console.log('Removeproduct '+id)
    //var plusCount = this.state.allchoseproduct.filter( remove => remove.id != id );
   // console.log(plusCount);
    //this.setState( {allchoseproduct: plusCount});
  }
  render() {
    
    const viewChoseProduct = this.state.allchoseproduct.map( v =>
      <ShoppingCart  key={v.id}
      id={v.id}
      name={v.name}
      count={v.count}
      cbPlusproduct={this.Plusproduct}
      cbMinusproduct={this.Minusproduct}
      cbRemoveproduct={this.Removeproduct}
      />
      );
      
      {/* увеличение количества товара
          уменьшение количества товара
          удаление товара */}

    return (
      <div className="productChosen__container">
        <div className="title">Узнайте стоимость заказа и энергетическую ценность продуктов</div>
        <div className="selectedPrice">
          <div>Стоимость:</div>
          <div className="cost">{this.state.cost}</div> руб.
        </div>
        <div className="selectedProduct">
          <span>Мой заказ</span>
          <div className="basket">
            {
            this.state.prod
            ?viewChoseProduct
            :
            this.state.empty}
          </div>
        </div>
        <div className="energy">
          <div>кДж <span>{this.state.dzh}</span></div>
          <div>Энергетическая ценность, ккал <span>{this.state.cal}</span></div>
          <div>Белки, г <span>{this.state.squirrles}</span></div>
          <div>Жиры, г <span>{this.state.fats}</span></div>
          <div>Углеводы, г <span>{this.state.carbohydrates}</span></div>
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

export default ProductChosen;
