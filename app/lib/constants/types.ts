export enum Availability {
  unavailable = "нет в наличии",
  available = "в наличии",
}

export interface CatalogItem {
  article: string;
  photo: string;
  price: string | number;
  title: string;
  id: string;
  info: string;
  category: string;
}
export type Nullable<T> = { [K in keyof T]: T[K] | null };
