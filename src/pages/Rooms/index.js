import React from "react";
import "./style.css";
import Banner from "./../../components/Header/Banner";
import Roomslist from "./Roomslist";
import Testimonials from "../../components/Testimonials";
import Footer from "./../../components/Footer";

function Rooms() {
  return (
    <>
      <Banner className="room-banner" />
      <Roomslist />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Rooms;
