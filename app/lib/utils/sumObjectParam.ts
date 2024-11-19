export default function sumObjectParam<T>(array: T[], key: string) {
  return array.reduce((acc, curr) => {
    // @ts-ignore: TODO
    return curr[key] ? acc + curr[key] : acc;
  }, 0);
}
