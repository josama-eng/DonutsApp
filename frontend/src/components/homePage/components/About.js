import { useState, useEffect } from "react";
import { getCategories } from "../../../services/categories.service";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setCategories]);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animate = inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 };
  const imgAnimate = inView
    ? { transform: "rotate(360deg)" }
    : { transform: "rotate(0deg)" };

  const renderCategories = () => {
    return categories.map((category, index) => {
      return (
        <div className="category" key={index}>
          <motion.img
            src={category.image}
            alt=""
            ref={ref}
            initial={{ opacity: 1 }}
            animate={imgAnimate}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <h3>
            <Link to={`/shop/${category._id}`} className="linkReset">
              {category.categoryName}
            </Link>
          </h3>
          <p>{category.description}</p>
        </div>
      );
    });
  };
  return (
    <div className="about">
      <motion.div
        className="content"
        ref={ref}
        initial={{ opacity: 0, x: 20 }}
        animate={animate}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2>What We Do</h2>
        <p>
          Welcome to our online shop, where you can discover the perfect balance
          of sweet and creamy goodness! Our selection of handcrafted donuts and
          velvety ice-creams are made with only the finest ingredients to ensure
          a delectable experience with every bite. From classic flavors to
          unique combinations, we've got something for everyone. So go ahead and
          satisfy your cravings by ordering now - you won't regret it!
        </p>
      </motion.div>
      <div className="categories">{renderCategories()}</div>
    </div>
  );
};

export default About;
