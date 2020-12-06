import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./NavBar.css";
import ItemInput from "../../pages/ItemInput/ItemInput";

const NavBar = (props) => {
  let nav = props.user ? (
    <nav className="navWrap">
      <div className="logo">SousChef</div>
      <div className="links">
        <Link className="NavBar-link" to="/">
          Home
        </Link>
        <Link className="NavBar-link" to="/iteminput">
          Item Input
        </Link>
        <Link to="" className="NavBar-link" onClick={props.handleLogout}>
          Log Out
        </Link>
      </div>
    </nav>
  ) : (
    <div>
      <Link to="/login" className="NavBar-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/register" className="NavBar-link">
        SIGN UP
      </Link>
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
