import { ReactNode } from "react";

export interface PageParams {
  searchParams: {
    category?: string;
    page?: number;
    minPrice?: number;
    maxPrice?: number;
  };
}
export interface LayoutProps {
  children: ReactNode;
  filters: ReactNode;
}
