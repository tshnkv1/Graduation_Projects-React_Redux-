import React from 'react';

//redux
import {connect} from 'react-redux';

import { productSetAC } from '../../redux/macStoreAC';

//router
import { BrowserRouter, Route } from 'react-router-dom';

//Ajax
import isoFetch from 'isomorphic-fetch';

//scss
import './App.scss';

//components
//import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import ProductChosen from '../ProductChosen/ProductChosen';
import Quality from '../Quality/Quality';

//images
import facebook from '../../images/facebook.svg';
import vk from '../../images/vk.svg';


class App extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadData();
  }

  fetchError = (errorMessage) => {
    console.error("showStr");
  };

  loadData = () => {

    isoFetch("http://localhost:3500/product", {
        method: 'get',
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
      this.props.dispatch(productSetAC(data));
    })
      
    .catch( error => {
        this.fetchError(error.message);
    })

  };

  render() {

    console.log(this.props.catalog);

    return (
      <BrowserRouter>
      <div className="project">
        {/*<Route path='/' exact component={Home}/>*/}
          <div className="container">
            <Navigation />
            <Route path='/menu' component={Main}/>
            <Route path='/menu' component={ProductChosen}/>
            <Route path='/quality' component={Quality}/>
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
        </BrowserRouter>
    );
  }
}

export default connect()(App);
