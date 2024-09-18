export default function getDefaultField(name: string, value?: string | number) {
  let categoryWithDefault = value ? `'${value}'` : `${name}`;
  return categoryWithDefault;
}
