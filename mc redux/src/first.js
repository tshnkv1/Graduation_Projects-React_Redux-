import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducer from '../src/redux/reducers';
import App from '../src/components/App/App.js';

let store=createStore(combinedReducer);


//здесь создается redux
class First extends React.PureComponent {

    state = {
        prod: [
            { id:1, name:"Биг-мак", price: 5.50, count: 1, dzh: 2131, cal: 509, squirrels: 27, fats: 26, carbohydrates: 42 },
            { id:2, name:"Бокс", price: 13.90, count: 1, dzh: 4763, cal: 1136, squirrels: 57, fats: 52, carbohydrates: 109 },
            { id:3, name:"Цезарь ролл", price: 7.00, count: 1, dzh: 2240, cal: 537, squirrels: 17, fats: 34, carbohydrates: 41 },
            { id:4, name:"Чикен примьер", price: 6.20, count: 1, dzh: 2216, cal: 530, squirrels: 19, fats: 31, carbohydrates: 45 },
            { id:5, name:"Coca Cola", price: 2.70, count: 1, dzh: 721, cal: 170, squirrels: 0, fats: 0, carbohydrates: 42 },
            { id:6, name:"Картошель фри", price: 2.60, count: 1, dzh: 1000, cal: 239, squirrels: 3, fats: 12, carbohydrates: 29 },
            { id:7, name:"Пирожок", price: 2.50, count: 1, dzh: 880, cal: 210, squirrels: 3, fats: 10, carbohydrates: 26 },
            { id:8, name:"Роял-де-люкс", price: 6.60, count: 1, dzh: 2373, cal: 568, squirrels: 27, fats: 33, carbohydrates: 41 },
            { id:9, name:"Стрипс", price: 3.90, count: 1,  dzh: 941, cal: 225, squirrels: 13, fats: 11, carbohydrates: 19 }
          ]
    }

  render() {

    return  (
        <Provider store={store}>
          <App catalog={this.state.prod}/>
        </Provider>
    )
  }

}

export default First;
