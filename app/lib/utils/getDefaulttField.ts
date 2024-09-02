export default function getDefaultField(
  name: string,
  value?: string
) {
  let categoryWithDefault = value ? `'${value}'` : `${name}`;
  return categoryWithDefault;
}
