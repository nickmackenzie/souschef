import React, { Component } from "react";
import itemService from "../../utilities/itemService";
import { deleteItem } from "../../utilities/listService";
import axios from "axios";
import { Button } from "primereact/button";

class DelBtn extends Component {
  state = {
    id: this.props.id,
    index: this.props.index,
    list: [this.props.list],
  };
  getListItems = () => {
    axios
      .get("api/items/getList")
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.setState({ list: data });
      })
      .catch(() => {
        alert("err");
      });
  };
  deleteData = async (id) => {
    let array = [...this.state.list];
    let idc = this.state.index;
    array.splice(idc, 1);
    console.log("new", array);
    this.setState({ list: array }, () => {
      console.log("dealersOverallTotal1");
    });
    console.log(id.target.dataset.id);
    let itmId = id.target.dataset.id;
    console.log(this.state);
    await deleteItem(itmId);
  };
  render() {
    return (
      <div>
        <div>
          {console.log("ok", this.props.list[0])}
          <input data-id={this.props.id}></input>
        </div>
        <Button
          data-id={this.props.id}
          value={this.props.id}
          id={this.props.id}
          onClick={this.deleteData}
        >
          Finished
        </Button>
      </div>
    );
  }
}

export default DelBtn;
