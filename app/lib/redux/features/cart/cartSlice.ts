import getFreeIndex from '@lib/utils/getFreeIndex';
import getSameItemInCart from '@lib/utils/getSameItemInCart';
import { getSortedAndStringifiedObject } from '@lib/utils/getSortedAndStringifiedObject';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  CartItemFull,
  CartItemShort,
  cartState,
  DecreasePayload,
} from './interfaces';

const getInitialCartItems = () => {
  if (typeof localStorage !== 'undefined') {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) return JSON.parse(savedCart);
  }

  return [];
};

const initialState: cartState = {
  cartItems: getInitialCartItems(),
  cartItemsFull: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseAmount: (
      state,
      { payload: itemToAdd }: PayloadAction<CartItemShort>
    ) => {
      const { itemInCartStringified, currCartID } = getSameItemInCart(
        state.cartItems,
        itemToAdd
      );

      if (itemInCartStringified) {
        state.cartItems.find((cartItem) => {
          const {
            amount: _,
            cartID,
            ...cartItemOnlyOptions
          } = cartItem;

          if (
            getSortedAndStringifiedObject(cartItemOnlyOptions) ===
            itemInCartStringified
          ) {
            state.cartItems = state.cartItems.map(
              ({ amount = 0, cartID, ...item }) => {
                return cartID === currCartID
                  ? { ...item, cartID, amount: amount + 1 }
                  : { ...item, cartID, amount };
              }
            );
          }
        });
      } else
        state.cartItems = [
          ...state.cartItems,
          {
            ...itemToAdd,
            cartID: getFreeIndex(state.cartItems),
            amount: 1,
          },
        ];
    },
    decreaseAmount: (
      state,
      {
        payload: { itemToRemove, isTotalDelete },
      }: PayloadAction<DecreasePayload>
    ) => {
      const { currCartID } = getSameItemInCart(
        state.cartItems,
        itemToRemove
      );

      const totallyDelete = () =>
        (state.cartItems = state.cartItems.filter(
          (_, index) => index !== currCartID
        ));

      if (isTotalDelete) totallyDelete();
      else {
        state.cartItems = state.cartItems.flatMap(
          ({ amount = 1, cartID, ...item }) => {
            if (cartID === currCartID) {
              if (amount === 1) return [];
              return { ...item, cartID, amount: amount - 1 };
            }
            return { ...item, cartID, amount };
          }
        );
      }
    },

    resetCart: (state) => {
      state.cartItems = [];
    },
    setFullCartItems: (
      state,
      action: PayloadAction<CartItemFull[]>
    ) => {
      state.cartItemsFull = action.payload;
    },
  },
});

export const {
  increaseAmount,
  resetCart,
  decreaseAmount,
  setFullCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
