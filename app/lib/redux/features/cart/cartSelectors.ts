import { RootState } from "../../store";

export const selectCartInfo = (state: RootState) => state.cartReducer.cartInfo;
