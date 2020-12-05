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
import "primereact/resources/themes/nova/theme.css";
import "primeicons/primeicons.css";
import ItemInput from "../ItemInput/ItemInput";

class App extends Component {
  constructor() {
    super();
    this.state = { user: userService.getUser(), screen: null };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };
  render() {
    return (
      <div className="App">
        <h1>SousChef</h1>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MainPage user={this.state.user} className="main" />}
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
        </Switch>
      </div>
    );
  }
}

export default App;
