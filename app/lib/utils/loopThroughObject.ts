export default function loopThroughObject(object: { [key: string]: number }) {
  return Object.entries(object).reduce((acc, curr) => (acc += curr[1]), 0);
}
