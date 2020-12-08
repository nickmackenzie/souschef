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
          let Tuesday = item.Tuesday;
          let tmr = this.props.tmr;

          let iew = `item`;
          let full = iew + "." + tmr;
          console.log("cre:m", full);

          console.log("tmrs date", tmr);
          return (
            <table className="customTable">
              <tbody>
                <tr>
                  <td>{name}</td>
                  <td>{full}</td>
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
