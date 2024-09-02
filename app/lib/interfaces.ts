export interface FilterParams {
  currentPage?: number;
  category?: string;
}

export interface Prices {
  min: string;
  max: string;
}
export type PricesNum = {
  [K in keyof Prices]: number;
};
