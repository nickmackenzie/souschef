import React, { Component } from "react";
import { Link } from "react-router-dom";
import itemService from "../../utilities/itemService";
import axios from "axios";
import { Card } from "primereact/card";

class MakeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [""],
    };
  }

  handleChange = (e) => {
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

  render() {
    return (
      <Card>
        <h1>Make {this.props.tmr}'s List</h1>
        {this.state.items.map((item) => {
          let name = item.item;
          let unit = item.unit;
          let category = item.category;
          let Sunday = item.Sunday;
          let Monday = item.Monday;
          let Tuesday = item.Tuesday;
          let Wednesday = item.Wednesday;
          let Thursday = item.Thursday;
          let Friday = item.Friday;
          let Saturday = item.Saturday;

          let tmr = this.props.tmr;
          if (tmr === "Sunday") {
            console.log("Hello", Tuesday);
            return (
              <table className="customTable">
                <tbody>
                  <tr>
                    <td>{name}</td>
                    <td>{Sunday}</td>
                  </tr>
                </tbody>
              </table>
            );
          } else if (tmr === "Monday") {
            console.log("Hello", Tuesday);
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
            console.log("Hello", Tuesday);
            return (
              <table className="customTable">
                <tbody>
                  <tr>
                    <td>{name}</td>
                    <td>{Tuesday}</td>
                  </tr>
                </tbody>
              </table>
            );
          } else if (tmr === "Wednesday") {
            return (
              <table className="customTable">
                <tbody>
                  <tr>
                    <td>{name}</td>
                    <td>{Wednesday}</td>
                  </tr>
                </tbody>
              </table>
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
