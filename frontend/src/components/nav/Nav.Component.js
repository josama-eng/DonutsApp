import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineAlignCenter,
  AiOutlineClose,
} from "react-icons/ai";
import Logo from "../../assets/images/logo.png";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavComponent = () => {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1,
      },
    },
  };

  return (
    <div className="container">
      <header>
        <div className="logo">
          <Link to="/" className="linkReset">
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="right">
          <Link to="/cart" onClick={closeMenu} className="linkReset">
            <AiOutlineShoppingCart className="cart" />
          </Link>
          <div className="menu" onClick={isOpen}>
            <AiOutlineAlignCenter className="bars" />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="menu_container"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            <div className="btn_close" onClick={closeMenu}>
              <AiOutlineClose />
            </div>
            <motion.li
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              <Link to="/" onClick={closeMenu} className="linkReset">
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              <Link to="/shop" onClick={closeMenu} className="linkReset">
                Shop
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
            >
              <Link to="/register" onClick={closeMenu} className="linkReset">
                Register
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              <Link to="/login" onClick={closeMenu} className="linkReset">
                Login
              </Link>
            </motion.li>

            <motion.li
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              <Link to="/contact" onClick={closeMenu} className="linkReset">
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavComponent;
