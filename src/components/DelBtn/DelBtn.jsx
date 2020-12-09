import React, { Component } from "react";
import itemService from "../../utilities/itemService";

import { Card } from "primereact/card";

class DelBtn extends Component {
  state = {
    id: null,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let tarId = e.target[0].dataset.id;
    try {
      //   itemService.makeList(this.state);
    } catch (err) {
      alert("Invalid Item");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {" "}
        <input data-id={this.props.id}></input>
        <button
          data-id={this.props.id}
          value={this.props.id}
          id={this.props.id}
        >
          {this.props.id}
        </button>
      </form>
    );
  }
}

export default DelBtn;
