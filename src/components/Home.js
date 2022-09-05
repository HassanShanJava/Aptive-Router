import React from "react";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import "./HomeStyles.css";
import NavBar from "./NavBar";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Pricing/>
      <Testimonial/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
