import React from "react";
import "./style.css";
import HotelInfo from "./HotelInfo";
import ImportantLinks from "./ImportantLinks";
import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <HotelInfo />
          <ImportantLinks />
          <SocialLinks />
          <Newsletter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
