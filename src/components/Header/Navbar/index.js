import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <Logo />
          <NavMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
