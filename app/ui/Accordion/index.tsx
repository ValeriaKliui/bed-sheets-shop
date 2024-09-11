import AccordionItem from "./AccordionItem";
import { AccordionProps } from "./interfaces";

export default function Accordion({ items }: AccordionProps) {
  if (!items[1]) return null;

  return (
    <div>
      {items.map(({ header, bottom }, id) => (
        <AccordionItem header={header} bottom={bottom} key={id} />
      ))}
    </div>
  );
}
