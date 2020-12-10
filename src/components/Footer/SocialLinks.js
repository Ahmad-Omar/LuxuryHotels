import React from "react";
import "./style.css";

function SocialLinks() {
  return (
    <div className="social-links">
      <ul>
        <li>
          <a href="/">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
