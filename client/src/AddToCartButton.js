import React from "react";
import { Alert, Button } from "react-bootstrap";

class AlertDismissable extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleDismiss = this.handleDismiss.bind(this);
      this.handleShow = this.handleShow.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleDismiss() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
        if (this.state.show) {
          return (
            <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
              <h4>You have add this item to your cart</h4>
              <p>
                You can go straight to checkout or keep shopping!
              </p>
              <p>
                <Button bsStyle="danger">Enter Payment</Button>
                <span> or </span>
                <Button onClick={this.handleDismiss}>Keep Shopping</Button>
              </p>
            </Alert>
          );
        }
    
        return <Button onClick={this.handleShow}>Purchase</Button>;
      }
    }

  export default AlertDismissable;