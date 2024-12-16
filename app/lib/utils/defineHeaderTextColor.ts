import colors from '@lib/styles/variables.module.scss';
const { text, text_light } = colors;

export default function defineHeaderTextColor(pathname: string) {
  if (pathname === '/') return text_light;
  return text;
}
