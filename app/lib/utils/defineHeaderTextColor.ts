import colors from "@variables.module.scss";

export default function defineHeaderTextColor(pathname: string) {
  const { text, text_light } = colors;

  if (pathname === "/") return text_light;
  return text;
}
