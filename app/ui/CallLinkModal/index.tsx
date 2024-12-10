"use client";

import useModal from "@hooks/useModal";
import CallForm from "@ui/CallForm";
import Gap from "@ui/Gap";
import Modal from "@ui/Modal";
import SuccessInfo from "@ui/SuccessModal";
import clsx from "clsx";

import styles from "./styles.module.scss";

export default function CallLinkModal() {
  const {
    openModal: openFormModal,
    isModalOpen: isFormModalOpen,
    closeModal: closeFormModal,
  } = useModal();
  const {
    openModal: openSuccessModal,
    isModalOpen: isSuccessModalOpen,
    closeModal: closeSuccessModal,
  } = useModal();

  const onFormSubmit = () => {
    closeFormModal();
    openSuccessModal();
  };

  return (
    <>
      <h4>8 800 222 22 22</h4>
      <a className={clsx("link", 'pointer')} onClick={openFormModal}>
        Заказать звонок
      </a>
      <Modal closeModal={closeFormModal} isOpened={isFormModalOpen}>
        <Gap direction="vertical" alignItems="flex-start" size="medium">
          <Gap justifyContent="space-between" className={styles.header}>
            <h3>Заказать звонок</h3>
          </Gap>
          <CallForm onSubmit={onFormSubmit} />
        </Gap>
      </Modal>
      <Modal closeModal={closeSuccessModal} isOpened={isSuccessModalOpen}>
        <SuccessInfo onAgree={closeSuccessModal} />
      </Modal>
    </>
  );
}
