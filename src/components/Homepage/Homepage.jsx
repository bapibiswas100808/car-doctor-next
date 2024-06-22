import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";

const Homepage = () => {
  return (
    <div className="px-3 lg:px-0">
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Homepage;
