import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productDetails } from "../services/products.service";
import { addToCart } from "../redux/cart.slicer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProductDetailsPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartStore.cart);

  useEffect(() => {
    productDetails(id)
      .then((response) => {
        setSingleProduct(response.data);
        console.log(singleProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function handleCount(shevron) {
    if (count + shevron > 0) {
      setCount(count + shevron);
    }
  }

  const handleAddToCart = (product) => {
    singleProduct.count = count;
    dispatch(addToCart(singleProduct));
  };

  const renderProduct = () => {
    return (
      <div className="singleProductContainer">
        <div className="img">
          <img src={`http://localhost:3001/${singleProduct?.image}`} alt="" />
        </div>
        <div className="content">
          <h3>{singleProduct?.name}</h3>
          <p>{singleProduct?.description}</p>
          <p className="price">Price: {singleProduct?.price}e</p>
          <div className="counter">
            <div
              className="shevronDown-wrapper"
              onClick={() => handleCount(-1)}
            >
              <FaChevronDown />
            </div>

            <p className="quantity">{count}</p>

            <div className="shevronUp-wrapper" onClick={() => handleCount(1)}>
              <FaChevronUp />
            </div>
          </div>
          <button onClick={() => handleAddToCart(singleProduct)}>
            <span></span>
            <span></span>
            <span></span>
            Add To Cart
          </button>
        </div>
      </div>
    );
  };

  return <div>{renderProduct()}</div>;
};

export default ProductDetailsPage;
