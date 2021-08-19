const PRODUCT_SET = 'PRODUCT_SET';

const PRODUCT_DELETE = 'PRODUCT_DELETE';
const PRODUCT_PLUS = 'PRODUCT_PLUS';
const PRODUCT_MINUS = 'PRODUCT_MINUS';

//const PRODUCT_PLUS_FROM_PRODUCTcart = 'PRODUCT_PLUS_FROM_PRODUCTcart';
const productSetAC=function(productArray) {
  console.log('в AC ', productArray);
  return {
    type: PRODUCT_SET,
    allproduct: productArray
    //получает массив
  };
}

const productDeleteAC=function(id) {
  return {
    type: PRODUCT_DELETE,
    idItem: id
  };
}

const productPlusAC=function(id) {
  return {
    type: PRODUCT_PLUS,
    idItem: id
  };
}

const productMinusAC=function(id) {
  return {
    type: PRODUCT_MINUS,
    idItem: id
  };
}

export {
  productSetAC, PRODUCT_SET,
  productDeleteAC, PRODUCT_DELETE,
  productPlusAC, PRODUCT_PLUS,
  productMinusAC, PRODUCT_MINUS,
}
