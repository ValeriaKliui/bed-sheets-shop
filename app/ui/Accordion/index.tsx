import clsx from "clsx";

import AccordionItem from "./AccordionItem";
import { AccordionProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={clsx(className, styles.container)}>
      {items.map(({ header, bottom }, id) => {
        const isBottomExists = (Object.values(bottom?.props)[0] as [])?.length;

        if (!isBottomExists) return false;
        return <AccordionItem header={header} bottom={bottom} key={id} />;
      })}
    </div>
  );
}
