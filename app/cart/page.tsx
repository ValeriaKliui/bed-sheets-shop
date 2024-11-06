import Breadcrumbs from "@ui/Breadcrumbs";
import CartInfo from "@ui/CartInfo";
import clsx from "clsx";

export default function CartPage() {
  return (
    <div className={clsx("wrapper", "page_layout")}>
      <Breadcrumbs />
      <CartInfo />
    </div>
  );
}
