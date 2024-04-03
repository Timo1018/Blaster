import React from "react";
import HomeBanner from "../Components/HomeBanner";
import Aboutcarts from "../Components/Aboutcarts";
import Portfolio from "../Components/Portfolio";
import Ourteam from "../Components/Ourteam";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Layouts = () => {
  return (
    <div>
      <HomeBanner />
      <Aboutcarts />
      <Portfolio />
      <Ourteam />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layouts;
