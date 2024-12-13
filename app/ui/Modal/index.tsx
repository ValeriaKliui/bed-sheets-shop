"use client";

import useOnClickOutside from "@hooks/useOnClickOutside";
import CircledIcon from "@ui/CircledIcon";
import Gap from "@ui/Gap";
import Portal from "@ui/Portal";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import colors from "@variables.module.scss";
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
  useLockBodyScroll();

  useOnClickOutside(modalContainerRef, closeModal);
  // useFreezeScroll();

  if (!isOpened) return false;

  return (
    <Portal selector="modal">
      <div className={styles.backdrop}>
        <Gap
          className={styles.container}
          ref={modalContainerRef}
          direction="vertical"
        >
          <CircledIcon
            src="/icons/close.svg"
            alt="close modal"
            color={bg}
            onClick={closeModal}
            className={styles.closeIcon}
          />
          {children}
        </Gap>
      </div>
    </Portal>
  );
}
