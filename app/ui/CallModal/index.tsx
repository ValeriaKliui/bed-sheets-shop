import useModal from "@hooks/useModal";
import CallForm from "@ui/CallForm";
import Gap from "@ui/Gap";
import Modal from "@ui/Modal";
import SuccessInfo from "@ui/SuccessModal";

import { CallModalProps } from "./interfaces";

export default function CallModal({
  closeModal: closeFormModal,
  isOpened: isFormModalOpen,
  title,
  successText,
  onSubmit,
}: CallModalProps) {
  const {
    openModal: openSuccessModal,
    isModalOpen: isSuccessModalOpen,
    closeModal: closeSuccessModal,
  } = useModal();

  const onFormSubmit = () => {
    onSubmit?.();
    closeFormModal();
    openSuccessModal();
  };

  const onAgree = () => {
    closeSuccessModal();
  };

  return (
    <>
      {isFormModalOpen && (
        <Modal closeModal={closeFormModal} isOpened={isFormModalOpen}>
          <Gap direction="vertical" alignItems="flex-start" size="medium">
            <Gap justifyContent="space-between">
              <h3>{title}</h3>
            </Gap>
            <CallForm onSubmit={onFormSubmit} />
          </Gap>
        </Modal>
      )}
      {isSuccessModalOpen && (
        <Modal closeModal={closeSuccessModal} isOpened={isSuccessModalOpen}>
          <SuccessInfo onAgree={onAgree} successText={successText} />
        </Modal>
      )}
    </>
  );
}
