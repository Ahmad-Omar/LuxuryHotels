import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Axios from "axios";

function Roomslist() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://api.unsplash.com/topics/travel/photos?client_id=UCpVRCTw6MNHXBACj0yN5BDs9Gxde81eL2LYc8MvuaE&orientation=landscape&per_page=3`
    )
      .then((res) => setImage(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="rooms-list">
      <div className="container">
        <div className="rooms-container">
          <div className="rooms-intro">
            <h2 className="rooms-heading">ROOMS AND RATES</h2>
            <p className="rooms-desc">
              Each of our bright, light-flooded rooms come with everything you
              could possibly need for a comfortable stay. And yes, comfort isn’t
              our only objective, we also value good design, sleek contemporary
              furnishing complemented by the rich tones of nature’s palette as
              visible from our rooms’ sea-view windows and terraces.
            </p>
          </div>
          <div className="rooms">
            {image.map((img) => {
              return (
                <div className="room" key={img.id}>
                  <figure>
                    <div className="figureimg">
                      <img src={img.urls.regular} alt="Room" />
                    </div>
                    <figcaption>
                      {img.alt_description !== null
                        ? img.alt_description.slice(0, 20)
                        : "Default Caption"}
                    </figcaption>
                  </figure>
                  <div className="room-details">
                    <div className="details">
                      <i className="im im-plus-circle"></i>
                      VIEW ROOM DETAILS
                    </div>
                    <a className="price" href="/">
                      $147 Avg/night
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roomslist;
