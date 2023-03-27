import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productDetails } from "../services/products.service";

const ProductDetailsPage = () => {
  const [singleProduct, setSingleProduct] = useState();
  const { id } = useParams();

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
          <p className="quantity">Quantity: 0</p>
          <button>
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
