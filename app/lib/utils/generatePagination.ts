export default function generatePagination(
  totalPages: number,
  currentPage: number
) {
  const defaultPages = 3;
  if (currentPage === 1) return [currentPage, currentPage + 1, currentPage + 2];

  if (totalPages <= defaultPages)
    return Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= currentPage)
    return [currentPage - 2, currentPage - 1, currentPage];

  return [currentPage - 1, currentPage, currentPage + 1];
}
