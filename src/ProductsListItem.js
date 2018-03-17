import React from 'react';

const ProductsListItem = ({product, handleDelete}) =>

 // <React.Fragment>{product.name}: {product.priceInCents}</React.Fragment>;

<React.Fragment>{product.name}: {(product.priceInCents/100).toFixed(2)};
<button className='editItem'>edit</button>
<button className='deleteItem'
  onClick={() => {handleDelete(product.id) }}>delete</button>
</React.Fragment>;

export default ProductsListItem;
