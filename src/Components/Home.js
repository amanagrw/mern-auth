import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home container text-center">
        <h3 className="text-red">Welcome</h3>
        <div className="container btn-container d-flex flex-column justify-content-center align-items-center">
          <NavLink exact to="/signin" className="btn btn-lg btn-custom mb-3">
            Signin
          </NavLink>
          <NavLink exact to="/signup" className="btn btn-lg btn-custom mb-3">
            Signup
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
