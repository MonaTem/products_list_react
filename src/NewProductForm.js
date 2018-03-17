import React from 'react';

class NewProductForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      priceInCents: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // async createProduct({name, priceInCents}) {


  // }

  // Promise-based solution
  // createProduct(data) {
  // Default options are marked with *
  // fetch('http://localhost:8082/api/products', {
    // body: JSON.stringify(data), // must match 'Content-Type' header
    // headers: {
      // 'user-agent': 'Product List exercise',
      // 'content-type': 'application/json'
    // },
    // method: 'POST' // *GET, PUT, DELETE, etc.
  // })
  // .then(response => response.json()) // parses response to JSON
  // .catch(error => console.error(error))
// }

//Async/await pattern!
async createProduct({name, priceInCents}) {
  const response = await fetch("http://localhost:8082/api/products", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    //make sure to serialize your JSON body
    body: JSON.stringify({
      name,
      priceInCents
    })
  })
  console.log( response )
  const json = await response.json();
// Re render the collection
this.props.get();
this.setState({
  name: '',
  priceInCents: ''

});
}



  handleSubmit(event) {
   event.preventDefault();
   console.log('SUBMITTED.');
   this.createProduct(this.state);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
   return (
    <form onSubmit={this.handleSubmit}>
     <div>
        <label>Name: </label>
      <input type="text" name="name" value={this.state.name}
        onChange={this.handleChange} />
      </div>
      <div>
        <label>Price (cents): </label>
      <input type="text" name="priceInCents"
        value={this.state.priceInCents} onChange={this.handleChange} />
      </div>
      <input type="submit" value="Add product" />
      </form>
   );
  }
  }

  export default NewProductForm;
