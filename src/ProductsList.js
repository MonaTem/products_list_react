import React from 'react';
import ProductsListItem from './ProductsListItem';

class ProductsList extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  async deleteItem(id) {
    const response = await
    fetch(`http://localhost:8082/api/products/${id}
      `,
      { method: 'DELETE' }
    );
    this.props.get();
  }

  handleDelete (id) {
    // console.log('DELETE');
    this.deleteItem(id);
  }

  render() {
   return (
    <ul>
    {this.props.products.map(product => (
      <li key={product.id}>
        <ProductsListItem
          product={product}
          handleDelete={this.handleDelete}
        />
       </li>
    ))}
   </ul>
   )
 }
}

export default ProductsList;
