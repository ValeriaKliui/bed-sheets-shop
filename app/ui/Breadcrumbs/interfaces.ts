import { PATHS } from "@lib/constants/paths";

export type LinksArray = { title: `${PATHS}`; path: string }[];

export interface BreadcrumbsProps {
  extraLinks?: { title: string; path: string }[];
  className?: string;
}
