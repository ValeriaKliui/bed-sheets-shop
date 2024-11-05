export type ItemsWithSize = {
  [size: string]: number;
};

export type ItemsNoSize = number;

export interface CartInfo {
  [id: string]: number | ItemsWithSize;
}

export interface cartState {
  cartInfo: CartInfo;
}
