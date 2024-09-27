export default function getDefaultTitle(title?: string) {
  return title ? `'%${title}%'` : "title";
}
