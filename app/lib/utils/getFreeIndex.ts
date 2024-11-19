export default function getFreeIndex<T extends { cartID?: number }>(
  cartItems: T[]
) {
  if (!cartItems || !cartItems.length) return 0;

  const indexes = cartItems.map(({ cartID }) => cartID || 0);
  const maxIndex = Math.max(...indexes);

  return maxIndex + 1;
}
