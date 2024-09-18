import { DEFAULT_PAGES, ITEMS_PER_PAGE } from "@lib/constants";

export default function generatePagination(
  totalItems: number,
  currentPage: number
) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const firstPage = currentPage === 1;
  const fewPages = totalPages <= DEFAULT_PAGES;
  const lastPage = totalPages <= currentPage;
  const prevLastPage = totalPages - 1 <= currentPage;

  if (fewPages)
    return { pages: Array.from({ length: totalPages }, (_, i) => i + 1) };

  if (firstPage)
    return {
      pages: [currentPage, currentPage + 1, currentPage + 2],
      isRightArrow: true,
    };

  if (lastPage)
    return {
      pages: [currentPage - 2, currentPage - 1, currentPage],
      isLeftArrow: true,
    };

  return {
    pages: [currentPage - 1, currentPage, currentPage + 1],
    isLeftArrow: true,
    isRightArrow: !prevLastPage,
  };
}
