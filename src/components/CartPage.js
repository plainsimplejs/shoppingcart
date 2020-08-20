import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { total, totalQuantity } = useSelector((state) => state.cart);
  return (
    <>
      <h1>Cart Page</h1>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${total}</p>
    </>
  );
};

export default CartPage;
