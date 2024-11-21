import CartProvider from "@providers/CartProvider";
import Breadcrumbs from "@ui/Breadcrumbs";
import CartBottomNoSSR from "@ui/CartBottom/CartBottomNoSSR";
import CartInfo from "@ui/CartInfo";
import clsx from "clsx";

import styles from "./styles.module.scss";

export default async function CartPage() {
  return (
    <div className={clsx("wrapper", "page_layout", styles.container)}>
      <div className={styles.cartInfo}>
        <Breadcrumbs />
        <CartProvider>
          <CartInfo />
        </CartProvider>
      </div>
      <CartBottomNoSSR />
    </div>
  );
}
