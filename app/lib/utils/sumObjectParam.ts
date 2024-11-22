export default function sumObjectParam<
  T extends { [key: string]: number | string }
>(array: T[], key: string) {
  return (
    array?.reduce((acc, curr) => {
      const value = curr[key];
      if (typeof value === "string") return acc;
      else return value ? acc + value : acc;
    }, 0) || 0
  );
}
