import React from "react";
import "./style.css";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import Footer from "./../../components/Footer";

function ContactUs() {
  return (
    <>
      <div className="contactus-heading">
        <h1>Contact-Us</h1>
      </div>
      <section className="contact-us">
        <div className="container">
          <div className="contact-intro">
            <h2 className="contact-heading">WE ARE HERE FOR YOU</h2>
            <p className="contact-desc">
              At Luxury Hotels, we take our customers seriously. Do you have any
              enquiries, compaints or requests, please forward it to our support
              desk and we will get back to you as soon as possible.
            </p>
          </div>
          <div className="contact-details">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
