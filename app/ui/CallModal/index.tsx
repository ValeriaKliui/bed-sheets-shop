import useModal from "@hooks/useModal";
import CallForm from "@ui/CallForm";
import Gap from "@ui/Gap";
import Modal from "@ui/Modal";
import SuccessInfo from "@ui/SuccessModal";

import { CallModalProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function CallModal({
  closeModal: closeFormModal,
  isOpened: isFormModalOpen,
  title,
  onSuccess,
  successText,
}: CallModalProps) {
  const {
    openModal: openSuccessModal,
    isModalOpen: isSuccessModalOpen,
    closeModal: closeSuccessModal,
  } = useModal();

  const onFormSubmit = () => {
    closeFormModal();
    openSuccessModal();
  };

  const onAgree = () => {
    closeSuccessModal();
    onSuccess?.();
  };

  return (
    <>
      <Modal closeModal={closeFormModal} isOpened={isFormModalOpen}>
        <Gap direction="vertical" alignItems="flex-start" size="medium">
          <Gap justifyContent="space-between" className={styles.header}>
            <h3>{title}</h3>
          </Gap>
          <CallForm onSubmit={onFormSubmit} />
        </Gap>
      </Modal>
      <Modal closeModal={closeSuccessModal} isOpened={isSuccessModalOpen}>
        <SuccessInfo onAgree={onAgree} successText={successText} />
      </Modal>
    </>
  );
}
