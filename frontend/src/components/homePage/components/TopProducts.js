import { getTopProducts } from "../../../services/products.service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    getTopProducts()
      .then((response) => {
        setTopProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setTopProducts]);

  const renderTopProducts = () => {
    return topProducts.map((product, index) => {
      return (
        <div className="product" key={index}>
          <div className="productBody">
            <Link
              to={`/productDetail/${product._id}`}
              className="linkReset productLink"
            >
              <h3>{product.name}</h3>
              <img src={`http://localhost:3001/${product.image}`} alt="" />
            </Link>
          </div>
          <h4>${product.price}</h4>
          <button>Add to cart</button>
        </div>
      );
    });
  };
  return (
    <div className="topProductsContainer">
      <h2>Our bestselling products</h2>
      <div className="topProducts">{renderTopProducts()}</div>
    </div>
  );
};

export default TopProducts;
// Glazed Donut
// Boston Cream Donut
// Jelly Donut
// Apple Fritter
// Chocolate Donut
// Old Fashioned Donut
// Blueberry Donut
// Cinnamon Roll Donut
// Maple Bar Donut
// Long John Donut
