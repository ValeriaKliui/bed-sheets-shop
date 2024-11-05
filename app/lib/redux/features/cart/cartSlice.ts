import { createSlice } from "@reduxjs/toolkit";

import { cartState } from "./interfaces";

const getInitialCart = () => {
  if (typeof localStorage !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) return JSON.parse(savedCart);
  }

  return {};
};

const initialState: cartState = {
  cartInfo: getInitialCart(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cartInfo = action.payload;
    },
  },
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
