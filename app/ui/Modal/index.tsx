"use client";

import Portal from "@ui/Portal";
import { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export default function Modal({ children }: PropsWithChildren) {
  return (
    <Portal selector="modal">
      <div className={styles.backdrop}>
        <div className={styles.container}>{children}</div>
      </div>
    </Portal>
  );
}
