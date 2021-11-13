import React from "react";
import Services from "./Services/Services";
import ShowProducts from "./ShowProducts/ShowProducts";
import ShowReview from "./ShowReview/ShowReview";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ShowProducts></ShowProducts>
      <Services></Services>
      <ShowReview></ShowReview>
    </div>
  );
};

export default Home;
