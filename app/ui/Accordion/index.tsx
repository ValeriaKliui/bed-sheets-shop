import AccordionItem from "./AccordionItem";
import { AccordionProps } from "./interfaces";

export default function Accordion({ items }: AccordionProps) {
  return (
    <>
      {items.map(({ header, bottom }, id) => {
        const isBottomExists = (Object.values(bottom?.props)[0] as [])?.length;

        if (!isBottomExists) return false;
        return <AccordionItem header={header} bottom={bottom} key={id} />;
      })}
    </>
  );
}
