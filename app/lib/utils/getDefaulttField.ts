export default function getDefaultField(name, value) {
  let categoryWithDefault = value ? `'${value}'` : `${name}`;
  return categoryWithDefault;
}
