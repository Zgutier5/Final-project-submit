import React, { Component } from "react";
import SearchPage from "./Search";

class Autos extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");

    fetch("/api/autos", {
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
        <h1>Auto Parts!</h1>
        <SearchPage/>
      </div>
    );
  }
}

export default Autos;
