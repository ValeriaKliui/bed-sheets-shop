import useCart from "@hooks/useCart";
import colors from "@lib/styles/variables.module.scss";
import CircledIcon from "@ui/CircledIcon";
import Gap from "@ui/Gap";

const { bg } = colors;

export default function CartHeader() {
  const { clearCart, getTotalAmountInCart } = useCart();
  const totalItemsAmount = getTotalAmountInCart();

  return (
    <Gap justifyContent="space-between">
      <h2>Корзина</h2>
      {totalItemsAmount > 0 && (
        <Gap onClick={clearCart} className="pointer">
          <p className="text_secondary">Очистить корзину</p>
          <CircledIcon src="/icons/clean.svg" alt={"clean cart"} color={bg} />
        </Gap>
      )}
    </Gap>
  );
}
