import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
  cardItems: string[];
}
const initialState: CardState = {
  cardItems: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addToCard: (state, { payload }: PayloadAction<string[]>) => {
      state.cardItems = [...state.cardItems, ...payload];
    },
  },
});

export const { addToCard } = cardSlice.actions;

export default cardSlice.reducer;
