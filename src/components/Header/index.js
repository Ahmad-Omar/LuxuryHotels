import React from "react";
import "./style.css";
import Banner from "./Banner";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <Banner />
    </header>
  );
}

export default Header;
