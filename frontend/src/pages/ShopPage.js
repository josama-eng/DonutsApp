import { getAllProducts } from "../services/products.service";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setProducts]);

  const renderProducts = () => {
    return products.map((product, index) => {
      return (
        <div className="productContainer" key={index}>
          <Link
            to={`/productDetails/${product._id}`}
            className="linkReset productDetailsLink"
          >
            <img src={`http://localhost:3001/${product.image}`} alt="" />
            <h3>{product.name}</h3>
            <p>{product.price}e</p>
            <button>
              <span></span>
              <span></span>
              <span></span>
              Add to cart
            </button>
          </Link>
        </div>
      );
    });
  };
  return (
    <div className="categoryContainer">
      <h2>Shop</h2>
      <div className="categoryWrapper">{renderProducts()}</div>
    </div>
  );
};

export default ShopPage;
