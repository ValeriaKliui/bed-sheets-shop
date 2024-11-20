export default function getItemsText(amount: number) {
  const amountStr = `${amount}`;
  const lastNum = Number(amountStr[amountStr.length - 1]);

  if ((amount > 9 && amount < 19) || (lastNum >= 5 && lastNum <= 9))
    return 'товаров';
  if (lastNum === 0 || lastNum === 1) return 'товар';
  if (lastNum > 1 && lastNum < 5) return 'товара';

  return lastNum;
}
