import React from "react";
import { Col } from "mdbreact";

class SearchPage extends React.Component {
  render() {
    return (
      <Col md="6">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </Col>
    );
  }
}

export default SearchPage;