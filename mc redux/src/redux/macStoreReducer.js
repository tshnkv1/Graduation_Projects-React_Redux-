import { PRODUCT_SET, PRODUCT_DELETE, PRODUCT_PLUS, PRODUCT_MINUS } from './macStoreAC';

const initState={

  prod: false, //true - в корзине есть продукты, false - в корзине нет продуктов
  empty: "В корзине ничего нет", //значение которое показывается в корзине при prod: false
  basket: [], //корзина
  catalog: [],
  allsum: {
    cost: 0,
    dzh: 0,
    cal: 0,
    squirrles: 0,
    fats: 0,
    carbohydrates: 0,
  }

}

function macStoreReducer(state=initState,action) {
  switch (action.type) {
    //получаем весь массив продуктов
    case PRODUCT_SET: {
      console.log(0);
      let newState={...state,
        catalog: action.idItem,
      };
      console.log('state после обработки редьюсером: ',newState)
      return newState
    }
    //из корзины удаляем продукт
    case PRODUCT_DELETE: {
      console.log(1);

    }
    
    //увеличиваем количетсво конкретного продукта в корзине на 1
    case PRODUCT_PLUS: {
      console.log(2);
    }
    
    //уменьшаем количетсво конкретного продукта в корзине на 1
    case PRODUCT_MINUS: {
      console.log(3);
    }

    default:
      return state;
  }
}

export default macStoreReducer;
