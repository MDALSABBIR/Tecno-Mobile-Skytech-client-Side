import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block slider-img"
            src="https://images.unsplash.com/photo-1518670309426-6643a938d2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="slider-text">
            <h4 className="fw-bold text-start">MOBI SKY TECH</h4>
            <h1 className="fw-bold text-start"> Capturing Anything AllTime</h1>
            <Link to="/explore">
              <p className=" text-start slider-text-btn">Explore More</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider-img"
            src="https://images.unsplash.com/photo-1518117946207-d26b51185902?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="slider-text">
            <h4 className="fw-bold text-start">MOBI SKY TECH</h4>
            <h1 className="fw-bold text-start"> Capturing Anything AllTime</h1>
            <Link to="/explore">
              <p className=" text-start slider-text-btn">Explore More</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
