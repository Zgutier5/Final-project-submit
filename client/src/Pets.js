import React, { Component } from "react";
import SearchPage from "./Search";

class Pets extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");

    fetch("/api/pets", {
      headers:{
        "Authoriazation":token
      }
    }).then((res) => {
      return res.text();
    }).then((data) => {
      this.setState({
        message: data
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Pet Products!</h1>
        <SearchPage/>
      </div>
    );
  }
}

export default Pets;
