import React from "react";
import "./style.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="heading">Testimonials</h2>
        <div className="testimonial">
          <h4 className="testimonial-text">
            "Calm, Serene, Retro – What a way to relax and enjoy"
          </h4>
          <p className="testimonial-person"> Mr. and Mrs. Baxter, UK</p>
        </div>
        <div className="arrows">
          <i className="im im-angle-left"></i>
          <i className="im im-angle-right"></i>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
