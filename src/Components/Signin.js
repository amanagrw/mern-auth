import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    if (this.props.success) {
      return <Redirect to="/dashboard" />;
    }
    let errormsg;
    if (this.props.error) {
      errormsg = <h5 className="mt-2 mb-3 text-red">Error</h5>;
    }
    return (
      <div className="card text-center">
        <h1 className="h3 mb-3 font-weight-normal text-red">Sign-in Form</h1>
        <label className="sr-only">Email address</label>
        <input
          type="email"
          id="email"
          className="form-control mb-3"
          placeholder="Email address"
          required=""
          autoFocus
          value={this.state.email}
          onChange={e => {
            this.setState({ email: e.target.value });
          }}
        />
        <label className="sr-only">Password</label>
        <input
          type="password"
          id="password"
          className="form-control mb-3"
          placeholder="Password"
          value={this.state.password}
          required=""
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
        />
        {errormsg}
        <button
          className="btn btn-lg btn-custom"
          type="submit"
          onClick={()=> this.props.signin(this.state.email, this.state.password)}
        >
          Sign in
        </button>
      </div>
    );
  }
}

export default Signin;
