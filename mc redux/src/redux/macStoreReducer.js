import { ReactReduxContext } from 'react-redux';
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
      console.log('set');
      console.log(action.allproduct);
      let newState={...state,
        catalog: action.allproduct,
      };
      console.log('state после обработки редьюсером: ', newState)
      return newState
    }

    //из корзины удаляем продукт
    case PRODUCT_DELETE: {
      console.log('delete');
      console.log(action.idItem);

      //обнуляем все суммы
      let copyAllsum = {
        cost: 0,
        dzh: 0,
        cal: 0,
        squirrles: 0,
        fats: 0,
        carbohydrates: 0,
      }

      let copyCatalog = [...state.catalog];

      //находим данные товара, который нужно удалить
      let delItem = copyCatalog.filter( prod => prod.id == action.idItem);
      console.log(delItem);

      //копия корзины
      let productWhendelete = [...state.basket];

      for ( let a = 0; a<productWhendelete.length; a++) {
        if(productWhendelete[a] == delItem[0]) {
          productWhendelete[a].count = 1;
        }
      }

      //удалить товар
      let del = productWhendelete.filter( remove => remove.id != action.idItem );
      console.log(del);



      let newState;
      if(del.length == 0) {
        console.log('пусто');
        newState={...state,
          prod: false,
          basket: del,
          allsum: copyAllsum,
        };
      }
      else {
        console.log('ещё что то есть');

        //перебираем корзину del и считаем все суммы
        del.map( v => {
          copyAllsum.cost += v.price * v.count;
          copyAllsum.dzh += v.dzh * v.count;
          copyAllsum.cal += v.cal * v.count;
          copyAllsum.squirrles += v.squirrels * v.count;
          copyAllsum.fats += v.fats * v.count;
          copyAllsum.carbohydrates += v.carbohydrates * v.count;
        })

        console.log(copyAllsum);

         newState={...state,
          prod: true,
          basket: del,
          allsum: copyAllsum,
        };
      }

      return newState
    }
    
    //увеличиваем количетсво конкретного продукта в корзине на 1
    case PRODUCT_PLUS: {
      console.log('plus');

      //обнуляем все суммы
      let copyAllsum = {
        cost: 0,
        dzh: 0,
        cal: 0,
        squirrles: 0,
        fats: 0,
        carbohydrates: 0,
      }



      let productWhenSelected = [...state.catalog];//делаем копию каталога
      console.log(productWhenSelected);

      let item = productWhenSelected.filter( prod => prod.id == action.idItem);//находим данные по выбранному товару
      console.log(item[0]);

      let choseBasket = [...state.basket];//делаем копию корзины

      if(choseBasket.length === 0) {
        console.log("0");
        choseBasket = [...choseBasket, item[0]];
        console.log(choseBasket);

        //перебираем корзину choseBasket и считаем все суммы
        choseBasket.map( v => {
        copyAllsum.cost = v.price * v.count;
        copyAllsum.dzh = v.dzh * v.count;
        copyAllsum.cal = v.cal * v.count;
        copyAllsum.squirrles = v.squirrels * v.count;
        copyAllsum.fats = v.fats * v.count;
        copyAllsum.carbohydrates = v.carbohydrates * v.count;
      })

      console.log(copyAllsum);
      }

      else {
        console.log('там есть товар');
        console.log(choseBasket.includes(item[0]));

        if(choseBasket.includes(item[0])){
          console.log('такой товар уже есть');
          
          for ( let a = 0; a<choseBasket.length; a++) {
            if(choseBasket[a] == item[0]){
              choseBasket[a].count++;
            }
          }
          console.log(choseBasket);

          //перебираем корзину choseBasket и считаем все суммы
          choseBasket.map( v => {
            copyAllsum.cost += v.price * v.count;
            copyAllsum.dzh += v.dzh * v.count;
            copyAllsum.cal += v.cal * v.count;
            copyAllsum.squirrles += v.squirrels * v.count;
            copyAllsum.fats += v.fats * v.count;
            copyAllsum.carbohydrates += v.carbohydrates * v.count;
          })

          console.log(copyAllsum);
        }

        else {
          console.log('добавляем дополнительный товар');
          choseBasket = [...choseBasket, item[0]];
          console.log(choseBasket);

          //перебираем корзину choseBasket и считаем все суммы
          choseBasket.map( v => {
            copyAllsum.cost += v.price * v.count;
            copyAllsum.dzh += v.dzh * v.count;
            copyAllsum.cal += v.cal * v.count;
            copyAllsum.squirrles += v.squirrels * v.count;
            copyAllsum.fats += v.fats * v.count;
            copyAllsum.carbohydrates += v.carbohydrates * v.count;
          })

          console.log(copyAllsum);
        }
      }
        
      let newState={...state,
        prod: true,
        basket: choseBasket,
        allsum: copyAllsum,
      };
      return newState

      /*


      //копия всех сумм
      var copyAllsum = {...state.allsum}
      console.log(copyAllsum);

      //копия корзины minusCount

      //перебираем корзину и считаем все суммы
      minusCount.map( v => {
        copyAllsum.cost = v.price * v.count;
        copyAllsum.dzh = v.dzh * v.count;
        copyAllsum.cal = v.cal * v.count;
        copyAllsum.squirrles = v.squirrels * v.count;
        copyAllsum.fats = v.fats * v.count;
        copyAllsum.carbohydrates = v.carbohydrates * v.count;
      })

      console.log(copyAllsum);
      */
    }
    
    //уменьшаем количетсво конкретного продукта в корзине на 1
    case PRODUCT_MINUS: {
      console.log('minus');

      //обнуляем все суммы
      let copyAllsum = {
        cost: 0,
        dzh: 0,
        cal: 0,
        squirrles: 0,
        fats: 0,
        carbohydrates: 0,
      }

      //копия корзины
      let minusCount = [...state.basket]
      
      minusCount.map( v => {

        if(v.id == action.idItem) {
        
          if(v.count > 1){
          
            v.count--;

          }
        }
        copyAllsum.cost += v.price * v.count;
        copyAllsum.dzh += v.dzh * v.count;
        copyAllsum.cal += v.cal * v.count;
        copyAllsum.squirrles += v.squirrels * v.count;
        copyAllsum.fats += v.fats * v.count;
        copyAllsum.carbohydrates += v.carbohydrates * v.count;
      })
      console.log(copyAllsum);

      let newState={...state,
        basket: minusCount,
        allsum: copyAllsum,
      };

    console.log(newState);

      return newState
    }

    default:
      return state;
  }
}

export default macStoreReducer;
