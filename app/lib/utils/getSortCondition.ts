export default function getSortCondition(sort?: string | null) {
  if (!sort) return "";
  const direction = sort.includes("DESC") ? "DESC" : "ASC";
  const value = sort.replace(`${direction}_`, "");

  return `ORDER BY ${value} ${direction}`;
}
