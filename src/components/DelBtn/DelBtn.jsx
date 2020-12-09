import React, { Component } from "react";
import itemService from "../../utilities/itemService";
import { deleteItem } from "../../utilities/listService";

import { Card } from "primereact/card";

class DelBtn extends Component {
  state = {
    id: null,
  };

  deleteData = async (id) => {
    console.log(id.target.dataset.id);
    let itmId = id.target.dataset.id;
    await deleteItem(itmId);
  };
  render() {
    return (
      <div>
        <div>
          <input data-id={this.props.id}></input>
        </div>
        <button
          data-id={this.props.id}
          value={this.props.id}
          id={this.props.id}
          onClick={this.deleteData}
        >
          {this.props.id}
        </button>
      </div>
    );
  }
}

export default DelBtn;
