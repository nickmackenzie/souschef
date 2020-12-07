import React, { Component } from "react";
import { Link } from "react-router-dom";
import itemService from "../../utilities/itemService";
import axios from "axios";
import { Card } from "primereact/card";

// const MakeList = (items) => {
//   let i = 0;

//   return (
//     <Card>
// {items.items.map((item) => {
//   console.log(item.item);
//   <div>{item.item}</div>;
// })}
//     </Card>
// //   );
// };

class MakeList extends Component {
  constructor() {
    super();
    this.state = {
      items: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
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
        {this.props.items.map((item) => {
          let name = item.item;
          let unit = item.unit;
          let category = item.category;
          let sun = item.Sunday;
          let mon = item.Monday;
          let tues = item.Tuesday;
          let wed = item.Wednesday;
          let thurs = item.Thursday;
          let fri = item.Friday;
          let sat = item.Saturday;
          return (
            <table className="customTable">
              <tbody>
                <tr>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>{sun}</td>
                  <td>{mon}</td>
                  <td>{tues}</td>
                  <td>{wed}</td>
                  <td>{thurs}</td>
                  <td>{fri}</td>
                  <td>{sat}</td>
                  <td>{unit}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </Card>
    );
  }
}

export default MakeList;
