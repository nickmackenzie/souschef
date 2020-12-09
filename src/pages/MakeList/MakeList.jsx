import React, { Component } from "react";
import { Link } from "react-router-dom";
import itemService from "../../utilities/itemService";
import axios from "axios";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
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

  // handleChange = (e) => {
  //   console.log(e);
  //   this.setState({
  //     forList: e.target.id,
  //   });
  // };

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

  componentDidMount() {
    this.getItems();
    this.getListItems();
  }

  valueChange = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      newList: [e.target.value, e.target.dataset.stock, e.target.dataset.par],
    }));
  };

  addToList = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.dataset.name);
    this.setState((prevState) => ({
      [e.target.dataset.name]: [...prevState.current, e.target.dataset.name],
    }));
  };

  getListItems = () => {
    axios
      .get("api/items/getList")
      .then((response) => {
        const data = response.data;
        console.log("len", data.length);
        this.setState({ list: data });
      })
      .catch(() => {
        alert("err");
      });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      itemService.makeList(this.state);
    } catch (err) {
      alert("Invalid Item");
    }
  };

  render() {
    return (
      <Card>
        <h1>Make {this.props.tmr}'s List</h1>
        {this.state.current.map((curr) => {
          return (
            <div className="newList">
              <ol>
                <li>{curr}</li>
                <li></li>
              </ol>
            </div>
          );
        })}
        {this.state.items.map((item) => {
          let name = item.item;
          let Sunday = item.Sunday;
          let Monday = item.Monday;
          let Tuesday = item.Tuesday;
          let Wednesday = item.Wednesday;
          let Thursday = item.Thursday;
          let Friday = item.Friday;
          let Saturday = item.Saturday;
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
              <div>
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
                  <button
                    value={name}
                    id={name}
                    name={name}
                    key={name}
                    onClick={this.handleSubmit}
                    data-name={name}
                    type="submit"
                  >
                    {name}
                  </button>
                </form>
              </div>
            );
          } else if (tmr === "Thursday") {
            return (
              <table className="customTable">
                <tbody>
                  <tr>
                    <td>{name}</td>
                    <td>{Thursday}</td>
                  </tr>
                </tbody>
              </table>
            );
          } else if (tmr === "Friday") {
            return (
              <table className="customTable">
                <tbody>
                  <tr>
                    <td>{name}</td>
                    <td>{Friday}</td>
                  </tr>
                </tbody>
              </table>
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

        <div className="newList">
          <a>{this.curr}</a>
        </div>
      </Card>
    );
  }
}

export default MakeList;
