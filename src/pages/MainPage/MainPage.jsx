import React, { Component } from "react";
import "./MainPage.css";
import PrepList from "../../components/PrepList/PrepList";
import { Panel } from "primereact/panel";
import { Card } from "primereact/card";
import DelBtn from "../../components/DelBtn/DelBtn";
import { Fieldset } from "primereact/fieldset";
import axios from "axios";
import { deleteItem } from "../../utilities/listService";
import { Button } from "primereact/button";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      list: this.getListItems(),
    };
  }

  deleteData = async (id) => {
    let array = [...this.state.list];
    let idc = id.target.dataset.index;
    array.splice(idc, 1);
    this.setState({ list: array }, () => {
      console.log("dealersOverallTotal1");
    });
    let itmId = id.target.dataset.id;
    await deleteItem(itmId);
  };

  getListItems = () => {
    axios
      .get("api/items/getList")
      .then((response) => {
        const data = response.data;
        this.setState({ list: data });
      })
      .catch(() => {
        alert("err");
      });
  };

  renderList() {
    let x = this.renderList.bind(this);
    let stateList = this.state.list;
    if (stateList != null) {
      return (
        <div className="parent">
          {stateList.map((item, idx) => {
            let inde = idx;
            let itm = item.item;
            let stk = item.stock;
            let par = item.par;
            let prep = par - stk;
            let id = item._id;
            let unit = item.unit;
            if (prep != 0) {
              return (
                <div className="item-wrap">
                  <span>{itm}</span>
                  <span>
                    Prep:{" "}
                    <span className="prep-color">
                      {prep} {unit}{" "}
                    </span>
                  </span>

                  <Button
                    data-id={id}
                    data-index={inde}
                    value={id}
                    id={id}
                    onClick={this.deleteData.bind(this)}
                    className="delete-button"
                  >
                    <i class="fas fa-check"></i>
                  </Button>
                </div>
              );
            }
          })}
        </div>
      );
    }
    return <div>Please Wait..</div>;
  }

  async componentDidMount() {
    this.getListItems();
    await this.renderList();
  }

  render() {
    return (
      <Card>
        <div className="box-todo">{this.renderList()}</div>
      </Card>
    );
  }
}

export default MainPage;

// let inde = idx;
// let itm = item.item;
// let stk = item.stock;
// let par = item.par;
// let prep = stk - par;
// let id = item._id;
