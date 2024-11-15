import useCart from "@hooks/useCart";
import CircledIcon from "@ui/CircledIcon";
import Gap from "@ui/Gap";
import colors from "@variables.module.scss";

const { bg } = colors;

export default function CartHeader() {
  const { cleanCart } = useCart();

  return (
    <Gap justifyContent="space-between">
      <h2>Корзина</h2>
      <Gap onClick={cleanCart}>
        <p className="text_secondary">Очистить корзину</p>
        <CircledIcon src="/icons/clean.svg" alt={"clean cart"} color={bg} />
      </Gap>
    </Gap>
  );
}