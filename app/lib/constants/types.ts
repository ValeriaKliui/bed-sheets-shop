export enum Availability {
  unavailable = "нет в наличии",
  available = "в наличии",
}

export interface CatalogItem {
  article: string;
  photo: string;
  price: number;
  title: string;
  id: string;
  info: string;
}
