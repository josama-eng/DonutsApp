import { useState, useEffect } from "react";
import { getCategories } from "../../../services/categories.service";
import { Link } from "react-router-dom";

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

  const renderCategories = () => {
    return categories.map((category, index) => {
      return (
        <div className="category" key={index}>
          <img src={category.image} alt="" />
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
      <div className="content">
        <h2>What We Do</h2>
        <p>
          Welcome to our online shop, where you can discover the perfect balance
          of sweet and creamy goodness! Our selection of handcrafted donuts and
          velvety ice-creams are made with only the finest ingredients to ensure
          a delectable experience with every bite. From classic flavors to
          unique combinations, we've got something for everyone. So go ahead and
          satisfy your cravings by ordering now - you won't regret it!
        </p>
      </div>
      <div className="categories">{renderCategories()}</div>
    </div>
  );
};

export default About;
