import React from 'react';
import PropTypes from 'prop-types';

//redux
import {connect} from 'react-redux';

import { productSetAC } from '../../redux/macStoreAC';

//router
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Ajax
//import isoFetch from 'isomorphic-fetch';

//scss
import './App.scss';

//components
//import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import ProductChosen from '../ProductChosen/ProductChosen';
//import Quality from '../Quality/Quality';

//images
import facebook from '../../images/facebook.svg';
import vk from '../../images/vk.svg';


class App extends React.PureComponent {

  constructor(props) {
    super(props);
  }
  
  static propTypes = {
    catalog: PropTypes.array.isRequired,
  };

  componentDidMount() {
    console.log(this.props.catalog);
    this.props.dispatch(productSetAC(this.props.catalog));
  }

  state = {
    //dataReady: false,
    //catalog: [],
    //all: this.props.catalog,
    //product: []
  }

  //обращение к Ajax
  //componentDidMount() {
  //  this.loadData();
  //}

  //очистка корзины
  /*delete = (iD) => {
    console.log(iD);
    let delItem = this.props.catalog.filter( prod => prod.id == iD);

    let productWhendelete = [...this.state.all];
    
    for ( let a = 0; a<productWhendelete.length; a++) {
      if(productWhendelete[a] == delItem[0]) {
        productWhendelete[a].count = 1;
      }
    }

    let del = this.state.product.filter( remove => remove.id != iD );
    console.log(del);
    this.setState( {product: del, all: productWhendelete});
  }

  //добавляем в корзину
  addToBasket = (iD) => {
    console.log(iD);
    let productWhenSelected = [...this.state.product];
    console.log(productWhenSelected);

    
    let item = this.state.all.filter( prod => prod.id == iD);
    console.log(item[0]);

    if(productWhenSelected.length === 0) {
      console.log("0");
      productWhenSelected = [...productWhenSelected, item[0]];
      console.log(productWhenSelected);
    }
    else {
      console.log('там есть товар');
      console.log(productWhenSelected.includes(item[0]));
      
      
      if(productWhenSelected.includes(item[0])){
        console.log('такой товар уже есть');

        for ( let a = 0; a<productWhenSelected.length; a++) {
          if(productWhenSelected[a] == item[0]){
            productWhenSelected[a].count = productWhenSelected[a].count + 1;
          }
        }

      }
      else {
        console.log('добавляем дополнительный товар');
        productWhenSelected = [...productWhenSelected, item[0]];
      }
    }
    this.setState( {product: productWhenSelected})
  }
  */

  /*fetchError = (errorMessage) => {
    console.error("showStr");
  };

  fetchSuccess = (loadedData) => {
    console.log('данные получены');
    this.setState({
      dataReady:true,
      catalog: loadedData.product,
      all: loadedData.product,
    });
  };*/

  /*loadData = () => {

    isoFetch("http://localhost:3500/product", {
        method: 'post',
        headers: {
            "Accept": "application/json",
        },
    })
      
    .then( response => { // response - HTTP-ответ
        if (!response.ok)
            throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
        else
            return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
    })
      
    .then( data => {
        this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
    })
      
    .catch( error => {
        this.fetchError(error.message);
    })

  };
  */

  render() {

    console.log(this.props.catalog);

    return (
      
      <div className="project">
        {/*<Route path='/' exact component={Home}/>*/}
          <div className="container">
            {/*<Navigation />*/}
            {/*<Route path='/menu' component={Main}/>
            <Route path='/menu' component={ProductChosen}/>
            <Route path='/quality' component={Quality}/> */}
            {/*
            !this.state.dataReady
              ?<div>загрузка данных...</div>
              :<Main catalogProduct={this.state.catalog} cbAddProduct={this.addToBasket}/>
            */}
            <Main //catalogProduct={this.props.catalog} 
            //cbAddProduct={this.addToBasket}
            />
            
            <ProductChosen 
            //choseProduct={this.state.product}
            //cbdelete={this.delete}
          />
            {/*<Quality />*/}
            
          </div>
          <footer className="footer">
            <div>Правовая информация</div>
            <div>Другие сайты Макдональдс</div>
            <div className="socialNetworks">
              <span>Оставайтесь с нами в соцсетях:</span>
              <img src={facebook} />
              <img src={vk} />
            </div>
            <div>© McDonald's Corporation</div>
          </footer>
        </div>
    );
  }
}

export default connect()(App);
