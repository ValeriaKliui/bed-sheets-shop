import { PHOTO_LINKS } from "@lib/constants";
import Dot from "@ui/Dot";

export default function DotsLinks() {
  return (
    <div>
      {PHOTO_LINKS.map(({ title, x, y, url }) => (
        <Dot title={title} x={x} y={y} url={url} key={title} />
      ))}
    </div>
  );
}
