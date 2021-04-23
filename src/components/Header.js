import logo from "../logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header">
      <Link to="/" className="header__left">
        <img src={logo} alt="Te quiero" />
      </Link>
      <div className="header__right">
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
};

export default Header;
