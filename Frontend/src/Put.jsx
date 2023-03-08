import React, { Component } from 'react';
import './Put.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Put extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      brand: '',
      quantity: '',
      category: '',
      price: '',
      rating: ''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleBrandChange = (event) => {
    this.setState({ brand: event.target.value });
  };

  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handleRatingChange = (event) => {
    this.setState({ rating: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      name: this.state.name,
      brand: this.state.brand,
      quantity: this.state.quantity,
      category: this.state.category,
      price: this.state.price,
      rating: this.state.rating
    };

    axios.put('http://127.0.0.1:8080/updateDetails', data);
  };

  render() {
    return (
      <body>
        <h1>Update Details</h1>
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">ID</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />

        <label className="sign-label">Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <label className="sign-label">Brand</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.brand}
          onChange={this.handleBrandChange}
        />

        <label className="sign-label">Quantity</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.quantity}
          onChange={this.handleQuantityChange}
        />

        <label className="sign-label">Category</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.category}
          onChange={this.handleCategoryChange}
        />

        <label className="sign-label">Price</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.price}
          onChange={this.handlePriceChange}
        />

        <label className="sign-label">Rating</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.rating}
          onChange={this.handleRatingChange}
        />

        <button className="login-button" type="submit">
          Update Details
        </button>
      </form>
      <button className='button'>
        <Link  to="/" >Add Item</Link>
      </button>
      <button className='button'>
        <Link  to="/Get" >See All Items</Link>
      </button>
      <button className='button'>
        <Link  to="/Delete" >Delete Item</Link>
      </button>
      
      </body>
    );
  }
}

export default Put;