import React, { Component } from "react";
import "./SignupForm.css";
import { Link } from "react-router-dom";
import userService from "../../utilities/userService";

import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    restaurant: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Successfully signed up - show GamePage
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.restaurant &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
      <Card>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <InputText
                type="text"
                className="form-control"
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <InputText
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <InputText
                type="text"
                className="form-control"
                placeholder="Restaurant"
                value={this.state.restaurant}
                name="restaurant"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <InputText
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <InputText
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <Button
                className="btn btn-default"
                disabled={this.isFormInvalid()}
              >
                Sign Up
              </Button>
              &nbsp;&nbsp;
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </Card>
    );
  }
}

export default SignupForm;
