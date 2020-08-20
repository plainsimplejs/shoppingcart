const initialState = {
  cart: [],
  total: 0,
  totalQuantity: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        total: state.total + action.payload.id * 10,
        totalQuantity: state.totalQuantity + 1
      };
    case "REMOVE_FROM_CART":
      return { ...state };
    default:
      return { ...state };
  }
};
