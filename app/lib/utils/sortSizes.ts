export default function sortSizes(sizes: string[]) {
  return sizes.sort((a, b) => {
    const aNum = a.match(/(\d+)/);
    const bNum = b.match(/(\d+)/);
    const isNumFirst = aNum && aNum?.length > 0;
    if (isNumFirst && bNum) {
      return Number(aNum[0]) - Number(bNum[0]);
    }
    return a.localeCompare(b);
  });
}
