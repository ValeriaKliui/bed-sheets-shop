export enum Availability {
  unavailable = "нет в наличии",
  available = "в наличии",
}

export enum ADDITIONAL_PROPERTIES {
  sizes = "размер",
  aromas = "аромат",
  colors = "цвет",
  textiles = "материал",
}
export type AdditionalPropertiesKeys = keyof typeof ADDITIONAL_PROPERTIES;

export type AdditionalProperties = {
  [key in AdditionalPropertiesKeys]?: string[] | null;
};
export type AdditionalPropertiesChoosen = {
  [key in AdditionalPropertiesKeys]?: string | null;
};

export interface CatalogItemSeeded extends AdditionalProperties {
  article: string;
  photo: string;
  price: string | number;
  title: string;
  id: string;
  info: string;
  category: string;
}

export interface CatalogItem {
  article: string;
  photo: string;
  price: string | number;
  title: string;
  id: string;
  info: string;
  category: string;
  additionalProperties: AdditionalProperties;
}

export type Nullable<T> = { [K in keyof T]: T[K] | null };

export interface SearchParams {
  category?: string;
  page?: number;
  minPrice?: number;
  maxPrice?: number;
  sizes?: string;
  inStock?: "false" | "true";
  sort?: string;
  search?: string;
  colors?: string;
  textiles?: string;
  aromas?: string;
}
export interface PageProps {
  searchParams: SearchParams;
  params: { id?: string; category?: string };
}
