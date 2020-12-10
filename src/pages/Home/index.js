import React from "react";
import "./style.css";
import Banner from "./../../components/Header/Banner";
import Roomtypes from "./Roomtypes";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Banner className="home-banner" />
      <Roomtypes />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
