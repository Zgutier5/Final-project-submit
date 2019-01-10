import React, { Component } from "react";
import SearchPage from "./Search";

class Electronics extends Component {
  constructor() {
    super();

    this.state = {
      electronics: [],
      isLoading: true 
    };
  }

  componentDidMount() {
    fetch("/api/electronics")
    .then(res=> res.json())
    .then(electronics => {
    this.setState({electronics, isLoading: false});
    });
  }

  listElectronics = () => {
    if (!this.state.isLoading) {
      console.log(this.state.electronics)
      return this.state.electronics.map((item, idx)=> {
        return (
          <div>
            <div></div>
            <img src={item.image}/>
          <p>{item.product} - {item.price}</p>
          </div>)
      })
    }
  }

  render() {
   
    
    return (
      <div>
        <h1>Electronics!</h1>
        <p>test </p>
        <SearchPage/>
        
        <div>
        {this.listElectronics()}
        </div>
      </div>
    );
  }
}

export default Electronics;
