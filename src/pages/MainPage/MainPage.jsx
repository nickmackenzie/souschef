import React, { Component } from "react";
import "./MainPage.css";
import PrepList from "../../components/PrepList/PrepList";
import { Panel } from "primereact/panel";
import { Card } from "primereact/card";

const MainPage = (props) => {
  let main = props.user ? (
    <div>
      <Panel header={props.day}>
        <div className="prep-list-wrap box">
          <table className="customTable">
            <tbody>
              <tr>
                <th>Item</th>
                <th>Stock</th>
                <th>Par Level</th>
              </tr>
              <tr>
                <td>Bread</td>
                <td>1</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
          <PrepList />
        </div>
      </Panel>
      <Card className="card">
        <div className="delivery-wrap box">Deliveries</div>
      </Card>
      <Card className="card">
        <div className="low-items-wrap box">Low Items</div>
      </Card>
    </div>
  ) : (
    <div>Please Login</div>
  );

  return <div className="main">{main}</div>;
};

export default MainPage;

// class MainPage extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     passwordConf: "",
//   };

//   render() {
//     return <PrepList />;
//   }
// }

// export default MainPage;
