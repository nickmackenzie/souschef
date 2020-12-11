import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Chef from "../../images/chef.svg";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
const NavBar = (props) => {
  let nav = props.user ? (
    <nav className="navWrap">
      <div className="nav-logo">
        <span className="sous">Sous </span>
        <span className="chef">Chef</span>
      </div>

      <div className="links">
        <Link className="NavBar-link" to="/main">
          Home
        </Link>

        <Link className="NavBar-link" to="/makelist">
          New List
        </Link>
        <Link className="NavBar-link" to="/iteminput">
          New Item
        </Link>
      </div>
    </nav>
  ) : (
    <div className="navWrap-signin">
      <div className="nav-logo">
        <span className="sous">Sous </span>
        <span className="chef">Chef</span>
      </div>
      <div className="loglink">
        {" "}
        <Link to="/login" className="NavBar-link">
          Log In
        </Link>
      </div>
      <div className="loglink">
        {" "}
        <Link to="/register" className="NavBar-link">
          Create Account
        </Link>
      </div>
      <div className="svg-wrap"> </div>
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
