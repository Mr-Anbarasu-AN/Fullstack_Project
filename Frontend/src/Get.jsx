/*
import axios from "axios";
import "./Get.css"
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Get extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/showDetails')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>See All Details</h1>
        <form>
          <div className="container">
            <table className="scroll-table" border={1}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Quantity</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.brand}</td>
                    <td>{user.quantity}</td>
                    <td>{user.category}</td>
                    <td>{user.price}</td>
                    <td>{user.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
        <button className="button">
        <Link to="/">Add Item</Link>
        </button>
        <button className="button">
        <Link to="/Put" >Update Item</Link>
        </button>
        <button className="button">
        <Link to="/Delete">Delete Item</Link>
        </button>

      </div>
    );
  }
}

export default Get;
*/




import axios from "axios";
import "./Get.css"
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Get extends Component {
state = {
data: [],
searchQuery: "",
};

componentDidMount() {
axios
.get("http://127.0.0.1:8080/showDetails")
.then((response) => {
this.setState({ data: response.data });
})
.catch((error) => {
console.log(error);
});
}

handleSearchInputChange = (event) => {
this.setState({ searchQuery: event.target.value });
};

handleSearch = () => {
// Filter data based on search query
const filteredData = this.state.data.filter((item) => {
const searchRegex = new RegExp(this.state.searchQuery, "i");
return (
searchRegex.test(item.name) ||
searchRegex.test(item.brand) ||
searchRegex.test(item.category)
);
});


// Update state with filtered data
this.setState({ data: filteredData });
};

render() {
return (
<div>
<h1>See All Details</h1>
<form>
<div className="container">
<div className="search-container">
<input
             type="text"
             placeholder="Search by Name, Brand, or Category"
             value={this.state.searchQuery}
             onChange={this.handleSearchInputChange}
           />
<button type="button" onClick={this.handleSearch}>
Search
</button>
</div>
<div className="container">
            <table className="scroll-table" border={1}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Quantity</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.brand}</td>
                    <td>{user.quantity}</td>
                    <td>{user.category}</td>
                    <td>{user.price}</td>
                    <td>{user.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </form>
        <button className="button">
        <Link to="/">Add Item</Link>
        </button>
        <button className="button">
        <Link to="/Put" >Update Item</Link>
        </button>
        <button className="button">
        <Link to="/Delete">Delete Item</Link>
        </button>

      </div>
    );
  }
}

export default Get;