import React, { Component } from "react";
import axios from "axios";

class Dash extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
    this.checkAuth = this.checkAuth.bind(this);
  }
  checkAuth(token) {
    let root = this;
    axios
      .get("http://localhost:4000/home", {
        headers: { authorization: token }
      })
      .then(function(response) {
        root.setState({
          email: response.data.user.email
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  componentWillMount() {
    if (this.props.token) {
      this.checkAuth(this.props.token);
    }
  }
  render() {
    if (this.state.email) {
      return (
        <div className="dash text-center">
          <h2 className="text-red">
            Congrats!! You have made it to Dashboard.
          </h2>
          <br />
          <h4>Your email addeess is {this.state.email}.</h4>
        </div>
      );
    }
    return (
      <div className="dash text-center">
        <h2 className="text-red">Please log in.</h2>
        <br />
      </div>
    );
  }
}

export default Dash;
