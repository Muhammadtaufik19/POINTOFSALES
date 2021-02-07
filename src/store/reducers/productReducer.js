import { product, products } from "../../utils/data";

const initialState = {
  product: products,
  carts: [],
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default productReducer;
