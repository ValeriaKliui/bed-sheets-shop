import fb from "../../../public/icons/fb.svg";
import ig from "../../../public/icons/ig.svg";
import pint from "../../../public/icons/pinterest.svg";
import tg from "../../../public/icons/tg.svg";
import vk from "../../../public/icons/vk.svg";
import yt from "../../../public/icons/yt.svg";

export const DEFAULT_PAGES = 3;
export const ITEMS_PER_PAGE = 9;

export const DB_ITEMS_NAME = "catalog_items";

export const SLIDER_MAIN = [
  {
    src: "/images/slider/girl.png",
    title: "В незапамятные времена наши предки-славяне называли ",
  },
  {
    src: "/images/slider/man.png",
    title: "В незапамятные времена наши предки-славяне называли ",
  },
  {
    src: "/images/slider/hotel.png",
    title: "В незапамятные времена наши предки-славяне называли ",
  },
];

export const CATEGORIES = [
  { title: "Постельное белье", category: "sheet" },
  { title: "Одежда", category: "clothes" },
  { title: "Ароматы", category: "aromas" },
  { title: "Аксессуары", category: "accessories" },
];

const CATEGORIES_LINKS = CATEGORIES.map((category) => ({
  ...category,
  url: `catalog/${category.category}`,
}));

export const FOOTER_LINKS = [
  CATEGORIES_LINKS,
  [
    { title: "Размерный гид", url: "" },
    { title: "Доставка и оплата", url: "" },
    { title: "Гарантия и возврат ", url: "" },
    { title: "Частые вопросы", url: "" },
  ],
];

export const NETWORKS = [
  { icon: vk, link: "https://vk.com" },
  { icon: pint, link: "https://pinterest.com" },
  { icon: tg, link: "https://tg.com" },
  { icon: fb, link: "https://fb.com" },
  { icon: yt, link: "https://yt.com" },
  { icon: ig, link: "https://ig.com" },
];

export const PHOTO_LINKS = [
  {
    title: "одежда",
    category: "clothes",
    x: 980,
    y: 521,
  },
  {
    title: "постельное белье",
    category: "sheets",
    x: 270,
    y: 557,
  },
  {
    title: "аксессуары",
    category: "accessories",
    x: 329,
    y: 810,
  },
  {
    title: "ароматы",
    category: "aromas",
    x: 1092,
    y: 639,
  },
];
