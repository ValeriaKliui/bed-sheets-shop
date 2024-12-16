"use client";

import useFreezeScroll from "@hooks/useFreezeScroll";
import useOnClickOutside from "@hooks/useOnClickOutside";
import CircledIcon from "@ui/CircledIcon";
import Gap from "@ui/Gap";
import Portal from "@ui/Portal";
import colors from "@lib/styles/variables.module.scss";
import { useRef } from "react";

import { ModalProps } from "./interfaces";
import styles from "./styles.module.scss";

const { bg } = colors;

export default function Modal({
  children,
  closeModal,
  isOpened = false,
}: ModalProps) {
  const modalContainerRef = useRef(null);

  useOnClickOutside(modalContainerRef, closeModal);

  useFreezeScroll(isOpened);

  if (!isOpened) return false;

  return (
    <Portal selector="modal">
      <div className={styles.backdrop}>
        <Gap
          className={styles.container}
          ref={modalContainerRef}
          direction="vertical"
          size="medium"
        >
          <CircledIcon
            src="/icons/close.svg"
            alt="close modal"
            color={bg}
            onClick={closeModal}
            className={styles.closeIcon}
          />
          <div style={{ position: 'relative' }}>{children}</div>
        </Gap>
      </div>
    </Portal >
  );
}
