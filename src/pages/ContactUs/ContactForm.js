import React from "react";
import "./style.css";

function ContactForm() {
  return (
    <div className="contact-form">
      <form>
        <label>Name</label>
        <input type="text" />

        <label>Email Address</label>
        <input type="text" />

        <label>Message</label>
        <textarea rows="15" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
