import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import Dash from './Dash';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      signin_success: false,
      signin_error: false,
      signup_success: false,
      signup_error: false
    };
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
  }
  signin(email, password) {
    let root = this;
    axios
      .post(
        "http://localhost:4000/auth/signin",
        {
          email,
          password
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" }
        }
      )
      .then(function(response) {
        console.log(response);
        root.setState({
          signin_success: true,
          token: response.data.token,
          signin_error:false
        });
      })
      .catch(function(error) {
        root.setState({
          signin_error: true,
          signin_success:false
        });
      });
  }
  signup(email, password) {
    let root = this;
    axios
      .post(
        "http://localhost:4000/auth/signup",
        {
          email,
          password
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" }
        }
      )
      .then(function(response) {
        root.setState({
          signup_success: true,
          token: response.data.token,
          signup_error:false
        });
      })
      .catch(function(error) {
        root.setState({
          signup_error: true,
          signup_success:false
        });
      });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" render={(props) => <Signin {...props}  signin={this.signin} success={this.state.signin_success} error={this.state.signin_error} />} />
            <Route exact path="/signup" render={(props) => <Signup {...props}  signup={this.signup} success={this.state.signup_success} error={this.state.signup_error} />} />
            <Route exact path="/dashboard" render={(props) => <Dash {...props}  token={this.state.token} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
