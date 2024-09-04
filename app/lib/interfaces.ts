export interface FilterParams {
  page?: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  size: string;
}

export interface Prices {
  min: string;
  max: string;
}
export type PricesNum = {
  [K in keyof Prices]: number;
};

export interface SizesArray {
  array: string[];
}
