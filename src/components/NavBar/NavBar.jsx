import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./NavBar.css";
import ItemInput from "../../pages/ItemInput/ItemInput";

const NavBar = (props) => {
  let nav = props.user ? (
    <nav className="navWrap">
      <div className="links">
        <Link className="NavBar-link" to="/">
          Home
        </Link>
        <Link className="NavBar-link" to="/iteminput">
          Item Input
        </Link>
        <Link className="NavBar-link" to="/makelist">
          New List
        </Link>
        <Link to="" className="NavBar-link" onClick={props.handleLogout}>
          Log Out
        </Link>
      </div>
    </nav>
  ) : (
    <div>
      <Link to="/login" className="NavBar-link">
        Log In
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/register" className="NavBar-link">
        Create Account
      </Link>
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
