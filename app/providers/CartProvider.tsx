"use client";

import useFullCartInfo from "@hooks/useFullCartInfo";
import Loader from "@ui/Loader";
import { PropsWithChildren } from "react";

export default function CartProvider({ children }: PropsWithChildren) {
  const { isLoading } = useFullCartInfo();

  return <>{isLoading ? <Loader /> : children}</>;
}
