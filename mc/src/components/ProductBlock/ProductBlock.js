import React from 'react'
import './ProductBlock.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductBlock() {
  return (
      <div className='
      col-lg-4 col-md-4 col-sm-6 col-xs-12 
      mc-products-product-section 
      mc-menu-filter-item 
      mc-menu-filtergroup-all  
      mc-menu-filtergroup-mcdrinks 
      mc-menu-filtergroup-mccafe
      '>
          <a>
              <img />
              <span></span>
              <span></span>
          </a>
          <div></div>
          <div></div>
      </div>
  );
}

export default ProductBlock;