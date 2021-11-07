import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar  navBar d-flex justify-content-around">
      <div></div>
      <img src={logo} width="250px" height="70px" alt="" />
      <div>Home quiz</div>
    </nav>
  );
};

export default Navbar;
