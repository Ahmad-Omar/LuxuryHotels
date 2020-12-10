import React from "react";
import "./style.css";

function ContactDetails() {
  return (
    <div className="contact-info">
      <p>
        497 Evergreen Rd. Roseville, <br />
        CA 95673
      </p>
      <a href="/">
        View map <i className="fas fa-long-arrow-alt-right"></i>
      </a>
      <p>Phone: +44 345 678 903</p>
      <p>Email: luxury_hotels@gmail.com</p>
    </div>
  );
}

export default ContactDetails;
