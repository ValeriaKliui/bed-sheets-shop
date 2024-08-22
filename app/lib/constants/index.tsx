import fb from "../../../public/icons/fb.svg";
import ig from "../../../public/icons/ig.svg";
import pint from "../../../public/icons/pinterest.svg";
import tg from "../../../public/icons/tg.svg";
import vk from "../../../public/icons/vk.svg";
import yt from "../../../public/icons/yt.svg";

export const FOOTER_LINKS = [
  [
    { title: "Постельное белье", url: "" },
    { title: "Одежда", url: "" },
    { title: "Ароматы", url: "" },
    { title: "Аксессуары", url: "" },
  ],
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
    url: "",
    x: 980,
    y: 521,
  },
  {
    title: "принты",
    url: "",
    x: 622,
    y: 311,
  },
  {
    title: "постельное белье",
    url: "",
    x: 270,
    y: 557,
  },
  {
    title: "комплекты",
    url: "",
    x: 329,
    y: 810,
  },
  {
    title: "ароматы",
    url: "",
    x: 1092,
    y: 639,
  },
];

export const CATEGORIES = PHOTO_LINKS.map(({ title, url }) => ({ title, url }));
