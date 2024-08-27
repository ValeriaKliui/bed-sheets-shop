import { ReactNode } from "react";

export interface NoSSRProps {
  children: ReactNode;
  defer?: boolean;
  fallback?: ReactNode;
}
