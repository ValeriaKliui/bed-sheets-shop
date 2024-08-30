export default function repeatArray<T>(array: T[], times: number) {
  return Array(times).fill(array).flat();
}
