"use client";

import CallForm from "@ui/CallForm";
import Gap from "@ui/Gap";
import Modal from "@ui/Modal";
import clsx from "clsx";
import { useState } from "react";

import styles from "./styles.module.scss";

export default function CallLinkModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <h4>8 800 222 22 22</h4>
      <a className={clsx("link", styles.link)} onClick={openModal}>
        Заказать звонок
      </a>
      {true && (
        <Modal>
          <Gap direction="vertical" alignItems="flex-start" size="medium">
            <h3>Заказать звонок</h3>
            <CallForm />
          </Gap>
        </Modal>
      )}
    </>
  );
}
