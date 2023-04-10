import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { setPrice, deleteFromCart } from "../redux/cart.slicer";
import { BsFillTrashFill } from "react-icons/bs";

const Cart = () => {
  const cart = useSelector((store) => store.cartStore.cart);
  const cartTotal = useSelector((store) => store.cartStore.totalPrice);
  const dispatch = useDispatch();

  const handleDeleteItem = (e, id, index) => {
    e.stopPropagation();
    dispatch(deleteFromCart({ id, index }));
  };

  const renderCartProducts = () => {
    return cart?.map((product, index) => {
      return (
        <div className="cartProduct" key={index}>
          <img src={`http://localhost:3001/${product.image}`} alt="" />
          <div className="content">
            <h3>{product.name}</h3>

            <div className="counter">
              <div
                className="shevronDown-wrapper"
                onClick={() => dispatch(setPrice({ increment: -1, index }))}
              >
                <FaChevronDown />
              </div>
              <p>{product.count}</p>

              <div
                className="shevronUp-wrapper"
                onClick={() => dispatch(setPrice({ increment: +1, index }))}
              >
                <FaChevronUp />
              </div>
            </div>
            <p>Price: {product.price}e</p>
            <button
              className="btnRemove"
              onClick={(e) => handleDeleteItem(e, product._id)}
            >
              <BsFillTrashFill className="iconRemove" />
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="cartWrapper">
      {renderCartProducts()}
      <p className="totalPrice">Total price: {cartTotal}e</p>
      <button className="btnCheckout">Checkout</button>
    </div>
  );
};

export default Cart;
