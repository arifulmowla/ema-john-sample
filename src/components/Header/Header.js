import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage Order</a>
        <a style={{ backgroundColor: "white", color: "black" }} href="/login">
          Login
        </a>
        {/* <a style={{ backgroundColor: "white", color: "black" }} href="/sign-up">
          Sign Up
        </a> */}
      </nav>
    </div>
  );
};

export default Header;
