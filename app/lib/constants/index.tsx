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
    src: "/images/slider/man.png",
    title: "В незапамятные времена наши предки-славяне называли ",
  },
  {
    src: "/images/slider/hotel.png",
    title: "В незапамятные времена наши предки-славяне называли ",
  },
  {
    src: "/images/slider/girl.png",
    title: "В незапамятные времена наши предки-славяне называли ",
  },
];

export const SLIDER_ITEM = [
  {
    src: "/images/slider/bed1.png",
  },
  {
    src: "/images/slider/bed2.png",
  },
  {
    src: "/images/slider/bed3.png",
  },
];

export const SLIDER_VERTICAL = [
  {
    src: "/images/room.png",
  },
  {
    src: "/images/girl_on_sheets.png",
  },
];

export const SLIDER_PERSONS = [
  {
    src: "/images/slider/woman.png",
    title: "Имя Фамилия",
    text: "В незапамятные времена наши предки-славяне называли лазоревыми цветами то купавку, то шиповник, то дикий пион. Лазоревый — не значит «голубой», лазоревый — это цвет зари.",
  },
  {
    src: "/images/slider/man.png",
    title: "Фамилия Имя",
    text: "В незапамятные времена наши предки-славяне называли лазоревыми цветами то купавку, то шиповник, то дикий пион. Лазоревый — не значит «голубой», лазоревый — это цвет зари.",
  },
  {
    src: "/images/slider/woman2.jpg",
    title: "Новая Фамилия",
    text: "В незапамятные времена наши предки-славяне называли лазоревыми цветами то купавку, то шиповник, то дикий пион. Лазоревый — не значит «голубой», лазоревый — это цвет зари.",
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
    x: 780,
    y: 1021,
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
    x: 702,
    y: 239,
  },
];
