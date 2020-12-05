import React, { Component } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div className="SignupPage">
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default SignupPage;
