import React from "react";
import Banner from "./../../components/Header/Banner";
import Facilitieslist from "./Facilitieslist";
import Testimonials from "../../components/Testimonials";
import Footer from "./../../components/Footer";

function Facilities() {
  return (
    <>
      <Banner className="facilities-banner" />
      <Facilitieslist />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Facilities;
