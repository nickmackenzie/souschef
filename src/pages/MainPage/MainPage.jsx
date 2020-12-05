import React, { Component } from "react";
import "./MainPage.css";
import PrepList from "../../components/PrepList/PrepList";
import { Card } from "primereact/card";

const MainPage = (props) => {
  let main = props.user ? (
    <div>
      <Card className="card">
        <div className="prep-list-wrap box">
          <h1>Today:</h1>
          <PrepList />
        </div>
      </Card>
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
