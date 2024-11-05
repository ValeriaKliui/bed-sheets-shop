"use client";

import useCart from "@hooks/useCart";
import Breadcrumbs from "@ui/Breadcrumbs";
import CircledIcon from "@ui/CircledIcon";
import Gap from "@ui/Gap";
import colors from "@variables.module.scss";
import clsx from "clsx";

const { bg } = colors;

export default function CartPage() {
  const { cleanCart } = useCart();

  return (
    <div className={clsx("wrapper", "page_layout")}>
      <Breadcrumbs />
      <Gap justifyContent="space-between">
        <h2>Корзина</h2>
        <Gap onClick={cleanCart}>
          <p className="text_secondary">Очистить корзину</p>
          <CircledIcon src="/icons/clean.svg" alt={"clean cart"} color={bg} />
        </Gap>
      </Gap>
    </div>
  );
}
