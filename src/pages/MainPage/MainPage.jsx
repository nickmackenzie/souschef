import React, { Component } from "react";
import "./MainPage.css";
import PrepList from "../../components/PrepList/PrepList";
import { Panel } from "primereact/panel";
import { Card } from "primereact/card";
import DelBtn from "../../components/DelBtn/DelBtn";
import { Fieldset } from "primereact/fieldset";
import axios from "axios";
import { deleteItem } from "../../utilities/listService";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
    this.mapList = this.mapList.bind(this);
  }

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

  getListItems = () => {
    axios
      .get("api/items/getList")
      .then((response) => {
        const data = response.data;
        console.log("data", data);
      })
      .catch(() => {
        alert("err");
      });
  };

  mapList = () => {
    console.log(this.state);
    if (this.props.list) {
      console.log(this.props.list);
      this.props.list.map((item, idx) => {
        let inde = idx;
        let itm = item.item;
        let stk = item.stock;
        let par = item.par;
        let prep = stk - par;
        let id = item._id;
        console.log(id);
        return inde, itm, stk, par, prep, id;
      });
    }
  };

  componentDidMount() {
    this.getListItems();
    this.mapList();
  }

  render() {
    return (
      <Card className="LoginPage">
        <Fieldset legend="Header">
          <p>{this.inde}</p>
        </Fieldset>
      </Card>
    );
  }
}

export default MainPage;
