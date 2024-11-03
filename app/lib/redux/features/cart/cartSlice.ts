import { createSlice } from '@reduxjs/toolkit';

import { cartState } from './interfaces';

const getInitialCart = () => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) return JSON.parse(savedCart);
  return {};
};

const initialState: cartState = {
  cartInfo: getInitialCart(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: () => {},
  },
});

export default cartSlice.reducer;
