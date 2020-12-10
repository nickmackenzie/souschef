import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <nav className="navWrap">
      <div className="nav-logo">
        <span className="sous">Sous</span>
        <span className="chef">Chef</span>
      </div>

      <div className="links">
        <Link className="NavBar-link" to="/">
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
    <div>
      <Link to="/login" className="NavBar-link">
        Log In
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/register" className="NavBar-link">
        Create Account
      </Link>
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
