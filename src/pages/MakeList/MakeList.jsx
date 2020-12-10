import React, { Component } from "react";
import "primeflex/primeflex.css";
import { Link } from "react-router-dom";
import itemService from "../../utilities/itemService";
import axios from "axios";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import "./MakeList.css";

class MakeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      current: [],
      newlist: {
        item: [],
      },
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

  async componentDidMount() {
    this.getItems();
    await this.getListItems();
  }

  valueChange = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      newList: [
        e.target.value,
        e.target.dataset.stock,
        e.target.dataset.par,
        e.target.dataset.unit,
      ],
    }));
  };

  addToList = (e) => {
    this.setState((prevState) => ({
      [e.target.dataset.name]: [...prevState.current, e.target.dataset.name],
    }));
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

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      this.toast.show({
        severity: "success",
        summary: "",
        detail: "Item Added To List",
      });
      itemService.makeList(this.state);
    } catch (err) {
      alert("Invalid Item");
    }
  };

  render() {
    return (
      <div>
        <Card header={`Make ${this.props.tmr}'s List`} className="make-wrap">
          <Toast ref={(el) => (this.toast = el)} />
          {/* {this.state.current.map((curr) => {
          return (
            <div>
              <ol>
                <li>{curr}</li>
                <li></li>
              </ol>
            </div>
          );
        })} */}
          {this.state.items.map((item) => {
            let name = item.item;
            let Sunday = item.Sunday;
            let Monday = item.Monday;
            let Tuesday = item.Tuesday;
            let Wednesday = item.Wednesday;
            let Thursday = item.Thursday;
            let Friday = item.Friday;
            let Saturday = item.Saturday;
            let unit = item.unit;
            let tmr = this.props.tmr;
            if (tmr === "Sunday") {
              return (
                <Card>
                  <form>
                    <h1>{name}</h1>
                  </form>
                </Card>
              );
            } else if (tmr === "Monday") {
              return (
                <table className="customTable">
                  <tbody>
                    <tr>
                      <td>{name}</td>
                      <td>{Monday}</td>
                    </tr>
                  </tbody>
                </table>
              );
            } else if (tmr === "Tuesday") {
              return (
                <form onSubmit={this.handleSubmit}>
                  <table className="customTable">
                    <tbody>
                      <tr>
                        <span>
                          <InputText
                            placeholder={name}
                            value={name}
                            defaultValue={name}
                            type="text"
                            name={name}
                          ></InputText>

                          <input
                            placeholder="0"
                            onChange={this.handleChange}
                            type="number"
                            name={name}
                          ></input>
                          <Button>Make List</Button>
                        </span>
                      </tr>
                    </tbody>
                  </table>
                </form>
              );
            } else if (tmr === "Wednesday") {
              return (
                <div className="list-wrap-div">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      name="stock"
                      data-stock={name}
                      data-par={Wednesday}
                      type="number"
                      max={Wednesday}
                      min="0"
                      onChange={this.valueChange}
                    ></input>
                    <Button
                      value={name}
                      id={name}
                      name={name}
                      onClick={this.handleSubmit}
                      data-name={name}
                      type="submit"
                      className="btn"
                    >
                      {name}
                    </Button>
                  </form>
                </div>
              );
            } else if (tmr === "Thursday") {
              return (
                <div>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      {" "}
                      <input
                        name="stock"
                        data-stock={name}
                        data-par={Thursday}
                        data-unit={unit}
                        type="number"
                        max={Thursday}
                        min="0"
                        onChange={this.valueChange}
                      ></input>
                    </div>
                    <div>
                      {" "}
                      <Button
                        data-stock={name}
                        data-par={Thursday}
                        data-name={name}
                        value={name}
                        id={name}
                        name={name}
                        data-name={name}
                        className="btn"
                        onClick={(e) =>
                          this.props.addToList([
                            e.target.value,
                            e.target.dataset.stock,
                            e.target.dataset.par,
                            e.target.dataset.unit,
                          ])
                        }
                        data-name={name}
                        type="submit"
                        className="btn"
                      >
                        {name}
                      </Button>
                    </div>
                  </form>
                </div>
              );
            } else if (tmr === "Friday") {
              return (
                <div className="item-container">
                  <form className="form-con" onSubmit={this.handleSubmit}>
                    {" "}
                    <input
                      name="stock"
                      data-stock={name}
                      data-par={Friday}
                      data-unit={unit}
                      type="number"
                      max={Friday}
                      min="0"
                      onChange={this.valueChange}
                    ></input>
                    <div>
                      {" "}
                      <Button
                        data-stock={name}
                        data-par={Friday}
                        data-name={name}
                        value={name}
                        id={name}
                        name={name}
                        data-name={name}
                        className="btn"
                        onClick={(e) =>
                          this.props.addToList([
                            e.target.value,
                            e.target.dataset.stock,
                            e.target.dataset.par,
                            e.target.dataset.unit,
                          ])
                        }
                        data-name={name}
                        type="submit"
                        className="btn"
                      >
                        {name}
                      </Button>
                    </div>
                  </form>
                </div>
              );
            } else if (tmr === "Saturday") {
              return (
                <table className="customTable">
                  <tbody>
                    <tr>
                      <td>{name}</td>
                      <td>{Saturday}</td>
                    </tr>
                  </tbody>
                </table>
              );
            }
          })}
        </Card>
      </div>
    );
  }
}

export default MakeList;
