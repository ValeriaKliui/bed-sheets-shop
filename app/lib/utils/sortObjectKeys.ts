export const sortObjectKeys = (object: {
  [key: string]: string | { [key: string]: string };
}) => {
  let keysValues = Object.entries(object);
  keysValues = keysValues.map((keyValue) => {
    let sortedKeyValue;
    const key = keyValue[0];
    const value = keyValue[1];

    if (typeof value === "object") {
      const sortedKeysOfValue = Object.keys(value).sort((a, b) =>
        a.localeCompare(b)
      );
      sortedKeyValue = sortedKeysOfValue.reduce(
        (sorted, key) => ({ ...sorted, [key]: value[key] }),
        {}
      );
    } else sortedKeyValue = value;

    return [key, sortedKeyValue];
  });

  return keysValues.sort((a, b) => a[0].localeCompare(b[0]));
};
