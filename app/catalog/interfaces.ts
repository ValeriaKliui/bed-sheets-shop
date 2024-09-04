import { ReactNode } from "react";

export interface PageParams {
  searchParams: {
    category?: string;
    page?: number;
    minPrice?: number;
    maxPrice?: number;
    size: string;
  };
}
export interface LayoutProps {
  children: ReactNode;
  filters: ReactNode;
}
