import { ModalProps } from "@ui/Modal/interfaces";

export interface CallModalProps extends ModalProps {
  title: string;
  onSuccess?: () => void;
  successText?: string;
}
