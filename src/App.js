import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ProductsList from './ProductsList';
import NewProductForm from './NewProductForm';


/*

class List extends Component {
  constructor(props) {
    super(props);
  }

  async getProductList() {
    const response = await fetch('http://localhost:8082/api/products');
    const json = await response.json();
    console.log(json);
    this.setState({ name: json._embedded.products.id.name })
  }


  render() {
    return (
      <div>
        <div className="List">
          <h2>Products List</h2>
        <List name={this.props_embedded.products.id.name} />
      <p key={index}>{name}</p>
        </div>
      </div>
    )
  }
}
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }


  async getProducts() {
    const response = await fetch('http://localhost:8082/api/products');
    const json = await response.json();
    console.log(json);
    this.setState({ products: json._embedded.products })
  }
/*
  ProductsList () {
    const prodList = this.state.products;
  }
  */



  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="App">
         <h2>Products List</h2>
       <NewProductForm get={this.getProducts.bind(this)}/>
       <ProductsList products={this.state.products}
                     get={this.getProducts.bind(this)} />
      </div>
     );
  }

}


/*
class ProductList extends Component {
  constructor() {
    super();
    this.state = getProducts({ products})
  }

 render() {
   return (
     <div className="ProductList">
       <h2>Product List</h2>
     <p>{products}</p>
     </div>
   )
 }
}
*/

export default App;
