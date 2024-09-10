"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import { AccItem } from "./interaces";
import styles from "./styles.module.scss";

export default function AccordionItem({ header, bottom }: AccItem) {
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
