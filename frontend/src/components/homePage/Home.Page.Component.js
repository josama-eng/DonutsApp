import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../assets/images/hero.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomePageComponent = () => {
  return (
    <div className="homePageComponent">
      <div className="hero">
        <img src={Hero} alt="" />
        {/* <img src={img3} alt="" /> */}
        {/* <img src={img2} alt="" /> */}
      </div>
      <div className="contentWrapper">
        <h1>
          Gonuts <br /> with Donuts
        </h1>
        <p>
          Gonuts with Donuts is a Sri Lanka dedicated food outlets for
          specialize manufacturing of Donuts in Colombo, Sri Lanka.
        </p>
        <Link to="/shop" className="linkReset homeBtn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePageComponent;
