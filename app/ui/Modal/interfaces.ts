import { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  closeModal: () => void;
  isOpened?: boolean;
}
