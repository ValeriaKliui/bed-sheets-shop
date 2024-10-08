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
  sizes?: string[] | null;
}
export type Nullable<T> = { [K in keyof T]: T[K] | null };

export interface SearchParams {
  category?: string;
  page?: number;
  minPrice?: number;
  maxPrice?: number;
  size?: string;
  inStock?: "false" | "true";
  sort?: string;
  search?: string;
}
export interface PageProps {
  searchParams: SearchParams;
  params: { id?: string; category?: string };
}
