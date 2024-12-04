import { PropsWithChildren, ReactNode } from "react";

export interface NoSSRProps extends PropsWithChildren {
  defer?: boolean;
  fallback?: ReactNode;
}
