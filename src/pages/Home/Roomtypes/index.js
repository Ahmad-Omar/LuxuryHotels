import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Roomtypes() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.unsplash.com/photos/random?client_id=UCpVRCTw6MNHXBACj0yN5BDs9Gxde81eL2LYc8MvuaE&orientation=landscape&count=2`,
    })
      .then((res) => {
        setImage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="room-types">
      <div className="container">
        <div className="room-container">
          <h3 className="main-title">
            All our room types are including complementary breakfast
          </h3>
          <div className="rooms">
            {image.map((d) => {
              return (
                <div className="room" key={d.id}>
                  <div className="room-info">
                    <h2 className="room-title">Luxury redefined</h2>
                    <p className="room-desc">
                      Our rooms are designed to transport you into an
                      environment made for leisure. Take your mind off the
                      day-to-day of home life and find a private paradise for
                      yourself.
                    </p>
                    <a href="/" className="explore">
                      Explore
                    </a>
                  </div>
                  <div className="room-img">
                    <img src={d.urls.regular} alt="Room-1" />
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

export default Roomtypes;
