import React from "react";
import { useDispatch } from "react-redux";
import { addToStore, removeFromStore } from "../redux/actions";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <p>{product.title}</p>
      <img src={product.thumbnailUrl} alt={product.title} height="50" />
      <br />
      <p>Unit Price: ${product.id * 10}</p>
      <p>Selected Quantity: 10</p>
      <button onClick={() => dispatch(addToStore(product))}>+</button>
      <button onClick={() => dispatch(removeFromStore(product))}>-</button>
    </div>
  );
};

export default Product;
