import React from "react";
import Button from "../../Button";
import "./style.css";

function Banner(props) {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-container">
          <div className={`${props.className} ${"banner-bg"}`}></div>
          <div className="banner-text">
            <h1>
              <span>Welcome to </span>
              <span>Luxury </span>
              <span>Hotels</span>
            </h1>
            <p>
              Book your stay and enjoy Luxury <br />
              redefined at the most affordable rates.
            </p>
          </div>
          <Button />
          <div className="scroll">
            Scroll
            <i className="im im-angle-down-circle"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
