export default function getSortDirectionByParams(searchParam: string | null) {
  if (!searchParam) return null;
  if (searchParam.includes("ASC")) return "ASC";
  return "DESC";
}
