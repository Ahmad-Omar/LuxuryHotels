import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Facilitieslist() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=8sl4fclAs2jswPF6CiOoaOYh-UHQqT10zscd8pz1utg&orientation=landscape&count=5`
      )
      .then((res) => {
        setImage(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="facilities">
      <div className="container">
        <div className="facilities-container">
          <div className="facilities-intro">
            <h2 className="facilities-heading">Facilities</h2>
            <p className="facilities-desc">
              We want your stay at our lush hotel to be truly unforgettable.
              That is why we give special attention to all of your needs so that
              we can ensure an experience quite uniquw. Luxury hotels offers the
              perfect setting with stunning views for leisure and our modern
              luxury resort facilities will help you enjoy the best of all.
            </p>
          </div>
          <div className="facilities-items">
            {image.map((img) => {
              return (
                <figure key={img.id}>
                  <div className="figureimg">
                    <img src={img.urls.regular} alt="THE_GYM" />
                  </div>
                  <figcaption>
                    {img.location.name !== null
                      ? img.location.name.slice(0, 20)
                      : "Default Caption"}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facilitieslist;
