"use client";

import NoSSR from "@ui/NoSSR";

import CartBottom from "..";

export default function CartBottomNoSSR() {
  return (
    <NoSSR>
      <CartBottom />
    </NoSSR>
  );
}
