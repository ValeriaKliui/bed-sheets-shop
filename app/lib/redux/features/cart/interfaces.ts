export type ItemsWithSize = {
  [size: string]: number;
};

export type ItemsNoSize = number;

export interface CartInfo {
  [id: string]: ItemsWithSize | ItemsNoSize;
}

export interface cartState {
  cartInfo: CartInfo;
}
