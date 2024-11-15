import CartProvider from "@providers/CartProvider";
import Breadcrumbs from "@ui/Breadcrumbs";
import CartBottom from "@ui/CartBottom";
import CartInfo from "@ui/CartInfo";
import clsx from "clsx";

import styles from "./styles.module.scss";

export default async function CartPage() {
  return (
    <div className={clsx("wrapper", "page_layout", styles.container)}>
      <div>
        <Breadcrumbs />
        <CartProvider>
          <CartInfo />
        </CartProvider>
      </div>
      <CartBottom />
    </div>
  );
}
