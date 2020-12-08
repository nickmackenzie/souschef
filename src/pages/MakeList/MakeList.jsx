import React, { Component } from "react";
import { Link } from "react-router-dom";
import itemService from "../../utilities/itemService";
import axios from "axios";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

class MakeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [""],
      newList: [""],
      Steak: null,
    };
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
  }

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
        {this.state.items.map((item) => {
          let name = "list" + item.item;
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
              <table className="customTable">
                <tbody>
                  <tr>
                    <td name="item">{name}</td>
                    <td>{Sunday}</td>
                  </tr>
                </tbody>
              </table>
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
                    </tr>
                  </tbody>
                </table>
              </form>
            );
          } else if (tmr === "Wednesday") {
            return (
              <form onSubmit={this.handleSubmit}>
                <table className="customTable">
                  <tbody>
                    <tr>
                      <h1 name="item" value={name}>
                        {name}
                      </h1>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <InputText
                  placeholder="0"
                  onChange={this.handleChange}
                  type="number"
                  name="stock"
                  className={name}
                ></InputText>
                <Button>Make List</Button>
              </form>
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
      </Card>
    );
  }
}

export default MakeList;
