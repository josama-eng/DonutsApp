import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../../assets/images/logo.png";

const NavComponent = () => {
  return (
    <div className="nav">
      <Link to="/" className="linkReset">
        <img src={Logo} alt="" className="logo" />
      </Link>
      <div className="middle">
        <Link to="/" className="linkReset navLinks">
          Home
        </Link>
        <Link to="/shop" className="linkReset navLinks">
          Shop
        </Link>
        <Link to="/about" className="linkReset navLinks">
          About Us
        </Link>
        <Link to="/contact" className="linkReset navLinks">
          Contact
        </Link>
      </div>
      <div className="end">
        <Link to="/register" className="linkReset navLinks">
          Register
        </Link>
        <Link to="/login" className="linkReset navLinks">
          Login
        </Link>
        <div className="cart">
          <Link to="/cart">
            <AiOutlineShoppingCart className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
