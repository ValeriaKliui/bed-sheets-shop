import { RootState } from "../../store";

export const selectCartItems = (state: RootState) =>
  state.cartReducer.cartItems;
export const selectFullCartItems = (state: RootState) =>
  state.cartReducer.cartItemsFull;
