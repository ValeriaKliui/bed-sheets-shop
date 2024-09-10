"use client";

import { useState } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { AccordionItem } from "./interaces";

export default function AccordionItem({ header, bottom }: AccordionItem) {
  const [isOpen, open] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={() => open(!isOpen)}>
        <div>{header}</div>
        <div>
          <Image
            src="/icons/arrow.svg"
            alt="open accordion"
            width={10}
            height={10}
            className={clsx(styles.arrow, isOpen && styles.arrow_opened)}
          />
        </div>
      </div>
      <div
        className={clsx(styles.bottom, isOpen ? styles.opened : styles.closed)}
      >
        {bottom}
      </div>
    </div>
  );
}
