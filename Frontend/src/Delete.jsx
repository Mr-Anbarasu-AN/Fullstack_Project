import React, { Component } from 'react';
import "./Delete.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:8080/deleteDetails/${this.state.id}`);
  };

  render() {
    return (
      <div>
        <body>
          <h1>Delete Details</h1>
      <form onSubmit={this.handleDelete} className="delete-form">
        <label className="delete-label">Enter ID</label>
        <input
          className="delete-input"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />

        <button className="delete-button" type="submit">
          Delete Record
        </button>
      </form>
      <button className="button">
      <Link  to="/" >Add Item</Link>
      </button>
      <button className="button">
        <Link  to="/Put" >Update Item</Link>
      </button>
      <button className="button">
        <Link  to="/Get" >See All Items</Link>
      </button>
      
      </body></div>
    );
  }
}

export default Delete;