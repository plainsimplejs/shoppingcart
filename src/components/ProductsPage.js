import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Products Page</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductsPage;
