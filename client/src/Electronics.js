import React, { Component } from "react";
import SearchPage from "./Search";

class Electronics extends Component {
  constructor() {
    super();

    this.state = {
      electronics: ""
    };
  }

  componentDidMount() {
    fetch("/api/electronics")
    .then(res=> res.json())
    .then(electronics => {
    this.setState({electronics})
    });
  }

  

  render() {
   const e = this.state.electronics
    
    return (
      <div>
        <h1>Electronics!</h1>
        <SearchPage/>
        
      </div>
    );
  }
}

export default Electronics;
