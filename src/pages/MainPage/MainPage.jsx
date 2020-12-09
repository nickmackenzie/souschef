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
      list: this.getListItems(),
    };
  }

  deleteData = async (id) => {
    console.log("id", id.target.dataset.index);
    let array = [...this.state.list];
    let idc = id.target.dataset.index;
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
        this.setState({ list: data });
      })
      .catch(() => {
        alert("err");
      });
  };

  renderList() {
    let x = this.renderList.bind(this);
    console.log("prp", this.state.list);
    let stateList = this.state.list;
    if (stateList != null) {
      return (
        <div>
          {stateList.map((item, idx) => {
            let inde = idx;
            console.log(item);
            let itm = item.item;
            let stk = item.stock;
            let par = item.par;
            let prep = par - stk;
            let id = item._id;
            let unit = item.unit;
            return (
              <div className="item-wrap">
                <div>
                  <Card>
                    <ul>
                      <li>
                        {" "}
                        {itm} Prep: <span className="prep-color">{prep}</span>{" "}
                        {unit}
                      </li>
                    </ul>
                    <button
                      data-id={id}
                      data-index={inde}
                      value={id}
                      id={id}
                      onClick={this.deleteData.bind(this)}
                      className="delete-button"
                    >
                      <i class="fas fa-check"></i>
                    </button>
                  </Card>
                </div>

                <div></div>
              </div>
            );
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
      <div>
        <Card className="LoginPage">
          <Fieldset legend="Prep List">
            {" "}
            <div>{this.renderList()}</div>
          </Fieldset>
        </Card>
      </div>
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
