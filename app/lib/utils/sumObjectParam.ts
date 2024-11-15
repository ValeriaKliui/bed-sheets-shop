export default function sumObjectParam(array, key: string) {
  return array.reduce((acc, curr) => {
    return curr[key] ? acc + curr[key] : acc;
  }, 0);
}
