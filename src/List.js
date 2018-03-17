import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class List extends Component {
  constructor(props) {
    super(props);
  }


render() {
  return (
    <ul>
      {this.props.list.map((list, index) =>
          <li key={index}>{list}</li>
        )}
    </ul>
  )
}
}

export default List;
