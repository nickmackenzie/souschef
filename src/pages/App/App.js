import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import { Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import NavBar from "../../components/NavBar/NavBar";
import MainPage from "../MainPage/MainPage";
import userService from "../../utilities/userService";
import listService from "../../utilities/listService";
import tokenService from "../../utilities/tokenService";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primeicons/primeicons.css";
import ItemInput from "../ItemInput/ItemInput";
import MakeList from "../MakeList/MakeList";
import itemService from "../../utilities/itemService";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      day: null,
      tmr: null,
      items: null,
      current: [],
    };
    this.addToList = this.addToList.bind(this);
  }

  // Handlers
  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  addToList = (value) => {
    this.setState((prevArray) => ({
      list: [value],
    }));
  };

  getDayOfWeek = () => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    var date = new Date();
    var day = date.getDay();
    var dayPlusOne = date.getDay() + 1;

    var today = weekday[day];
    var tmr = weekday[dayPlusOne];
    this.setState({ day: today });
    this.setState({ tmr: tmr });
  };

  getItems = () => {
    axios
      .get("api/items/getItems")
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.setState({ items: data });
      })
      .catch(() => {
        alert("err");
      });
  };

  async componentDidMount() {
    this.getDayOfWeek();
    this.getItems();
  }

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainPage
                user={this.state.user}
                className="main"
                day={this.state.day}
                items={this.state.items}
                list={this.state.list}
                addToList={this.addToList}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/iteminput"
            render={({ history }) => <ItemInput history={history} />}
          />
          <Route
            exact
            path="/makelist"
            render={({ history }) => (
              <MakeList
                tmr={this.state.tmr}
                items={this.state.items}
                history={history}
                current={this.state.current}
                addToList={this.addToList.bind(this)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
