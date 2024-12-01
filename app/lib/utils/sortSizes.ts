import { AdditionalPropertiesKeys } from '@lib/constants/types';

const sortProperties = (properties: string[]) =>
  properties.sort((a, b) => {
    const aNum = a.match(/(\d+)/);
    const bNum = b.match(/(\d+)/);
    const isNumFirst = aNum && aNum?.length > 0;
    if (isNumFirst && bNum) {
      return Number(aNum[0]) - Number(bNum[0]);
    }
    return a.localeCompare(b);
  });

export default function getSortedProperties<
  T extends string
>(properties: {
  [key in AdditionalPropertiesKeys]: string[];
}) {
  const propertiesArr = Object.entries(properties)
    .filter(([_, values]) => values.length)
    .map(([property, values]) => [
      property,
      sortProperties(values),
    ]) as [T, string[]][];

  return propertiesArr;
}
