import getSameItemInCart from "@lib/utils/getSameItemInCart";
import { getSortedAndStringifiedObject } from "@lib/utils/getSortedAndStringifiedObject";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem, cartState, DecreasePayload } from "./interfaces";

const getInitialCartItems = () => {
  if (typeof localStorage !== "undefined") {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) return JSON.parse(savedCart);
  }

  return [];
};

const initialState: cartState = {
  cartItems: getInitialCartItems(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseAmount: (
      state,
      { payload: itemToAdd }: PayloadAction<CartItem>
    ) => {
      const { itemInCartStringified, currCartID } = getSameItemInCart(
        state.cartItems,
        itemToAdd
      );

      if (itemInCartStringified) {
        state.cartItems.find((cartItem) => {
          const { amount: _, cartID: __, ...cartItemOnlyOptions } = cartItem;

          if (
            getSortedAndStringifiedObject(cartItemOnlyOptions) ===
            itemInCartStringified
          ) {
            state.cartItems = state.cartItems.map(
              ({ amount = 0, ...item }, index) => {
                return index === currCartID
                  ? { ...item, amount: amount + 1 }
                  : { ...item, amount };
              }
            );
          }
        });
      } else
        state.cartItems = [
          ...state.cartItems,
          { ...itemToAdd, cartID: state.cartItems.length, amount: 1 },
        ];
    },
    decreaseAmount: (
      state,
      {
        payload: { itemToRemove, isTotalDelete },
      }: PayloadAction<DecreasePayload>
    ) => {
      const { currCartID } = getSameItemInCart(state.cartItems, itemToRemove);
      const totallyDelete = () =>
        (state.cartItems = state.cartItems.filter(
          (_, index) => index !== currCartID
        ));

      if (isTotalDelete) totallyDelete();
      else {
        state.cartItems = state.cartItems.flatMap(
          ({ amount = 1, ...item }, index) => {
            if (index === currCartID) {
              if (amount === 1) return [];
              return { ...item, amount: amount - 1 };
            }
            return { ...item, amount };
          }
        );
      }
    },

    resetCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { increaseAmount, resetCart, decreaseAmount } = cartSlice.actions;

export default cartSlice.reducer;
