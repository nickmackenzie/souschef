import React, { Component } from "react";
import "./App.css";

import { Link, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import NavBar from "../../components/NavBar/NavBar";
import MainPage from "../MainPage/MainPage";
import userService from "../../utilities/userService";
import tokenService from "../../utilities/tokenService";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/nova-alt/theme.css";
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
      list: itemService.findItems(),
    };
  }

  // Handlers
  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
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
    var today = weekday[day];
    this.setState({ day: today });
  };

  async componentDidMount() {
    this.getDayOfWeek();
    const rt = itemService.findItems();
    console.log(rt);
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
            render={({ history }) => <MakeList history={history} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
