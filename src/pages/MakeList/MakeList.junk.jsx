import React, { Component } from "react";
import { PickList } from "primereact/picklist";
import itemService from "../../utilities/listService";
import axios from "axios";
export class MakeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: [],
      target: [],
    };
  }
  getItems = () => {
    axios
      .get("api/items/getItems")
      .then((response) => {
        const data = response.data;
        this.setState({ items: data });
      })
      .catch(() => {
        alert("err");
      });
  };

  render() {
    this.state.items.map((item) => {
      let name = item.item;
      let Sunday = item.Sunday;
      let Monday = item.Monday;
      let Tuesday = item.Tuesday;
      let Wednesday = item.Wednesday;
      let Thursday = item.Thursday;
      let Friday = item.Friday;
      let Saturday = item.Saturday;
      let tmr = this.props.tmr;
    });
    return <div>heloo</div>;
  }
}
export default MakeList;
