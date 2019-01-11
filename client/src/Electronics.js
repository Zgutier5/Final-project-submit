import React, { Component } from "react";
import SearchPage from "./Search";
import AlertDismissable from "./AddToCartButton";


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

  

  listElectronics = (props) => {
    if (!this.state.isLoading) {
      console.log(this.state.electronics)
      
      return this.state.electronics.map((item, idx)=> {
        return (
          <div>
            <div class="col-md-6">
            <br></br>
            <img  src={item.image}/>
            <p>{item.product} - {item.price}</p> 
            
            <AlertDismissable/>
            </div> 
          </div>
          
          )
      })
    }
  }

  

  render() {
   
    
    return (
      <div>
        <h1>Electronics!</h1>
        <br></br>
        <div>
        {this.listElectronics()}
        
        </div>
        
      </div>
    );
  }
}

export default Electronics;