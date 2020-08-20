import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos?_limit=5"
  );

  dispatch({ type: "GET_PRODUCTS", payload: data });
};

export const addToStore = (product) => {
  return { type: "ADD_TO_CART", payload: product };
};
export const removeFromStore = (product) => ({
  type: "REMOVE_FROM_CART",
  payload: product
});
