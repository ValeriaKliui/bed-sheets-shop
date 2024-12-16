import useCart from "@hooks/useCart";
import CircledIcon from "@ui/CircledIcon";
import colors from "@lib/styles/variables.module.scss";

import styles from "./styles.module.scss";

const { primary } = colors;

export default function CartIcon() {
  const { getTotalAmountInCart } = useCart();

  const totalAmount = getTotalAmountInCart();

  return (
    <div className={styles.container}>
      <CircledIcon
        src="/icons/bag.svg"
        alt={"To shopping cart"}
        color={primary}
      />
      <div className={styles.amount}>
        <p>{totalAmount}</p>
      </div>
    </div>
  );
}
