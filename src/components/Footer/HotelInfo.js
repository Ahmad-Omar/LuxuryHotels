import React from "react";
import "./style.css";

function HotelInfo() {
  return (
    <div className="hotels-info">
      <div className="site-brand">
        <h2>
          LUXURY <span>HOTELS</span>
        </h2>
      </div>
      <ul className="details">
        <li>497 Evergreen Rd. Roseville, CA 95673</li>
        <li>+44 345 678 903</li>
        <li>luxury_hotels@gmail.com</li>
      </ul>
    </div>
  );
}

export default HotelInfo;
