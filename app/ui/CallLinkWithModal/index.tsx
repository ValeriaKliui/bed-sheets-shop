"use client";

import useModal from "@hooks/useModal";
import CallModal from "@ui/CallModal";
import clsx from "clsx";

export default function CallLinkWithModal() {
  const { openModal: openFormModal, isModalOpen, closeModal } = useModal();

  return (
    <>
      <h4>8 800 222 22 22</h4>
      <a className={clsx("link", "pointer")} onClick={openFormModal}>
        Заказать звонок
      </a>
      <CallModal
        isOpened={isModalOpen}
        closeModal={closeModal}
        title="Заказать звонок"
        successText="Спасибо, мы с вами свяжемся!"
      />
    </>
  );
}
