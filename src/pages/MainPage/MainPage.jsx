import React, { Component } from "react";
import "./MainPage.css";
import { Card } from "primereact/card";
import axios from "axios";
import { deleteItem } from "../../utilities/listService";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.getListItems();
    this.renderList();
  }

  deleteData = async (id) => {
    console.log("del", id);
    let itmId = id.target.id;

    let array = [...this.state.list];
    let idc = id.target.dataset.index;
    array.splice(idc, 1);
    this.setState({ list: array }, () => {
      deleteItem(itmId);
    });

    this.toast.show({
      severity: "success",
      summary: "Done",
      detail: "Item Done Prepping",
    });
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
    let stateList = this.state.list;
    if (stateList) {
      return (
        <div header="Todays Prep List" className="parent">
          {stateList.map((item, idx) => {
            let inde = idx;
            let itm = item.item;
            let stk = item.stock;
            let par = item.par;
            let prep = par - stk;
            let id = item._id;
            let unit = item.unit;

            return (
              <div className="item-wrap" key={id}>
                <span className="name-span"> {itm} </span>
                <div>
                  {" "}
                  <span className="prep-span">
                    Prep: <span className="prep-color">{prep} </span>
                    {unit}{" "}
                  </span>
                </div>

                <button
                  data-id={id}
                  data-index={inde}
                  value={id}
                  id={id}
                  onClick={this.deleteData}
                  className="delete-button"
                >
                  Done
                </button>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div>
        <ProgressSpinner />
      </div>
    );
  }

  render() {
    return (
      <Card className="prep-card">
        <Toast className="toast" ref={(el) => (this.toast = el)} />
        <h1 className="prep-list-title">{this.props.day}'s List</h1>
        <div Header="Todays Prep List" className="box-todo">
          {this.renderList()}
        </div>
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
