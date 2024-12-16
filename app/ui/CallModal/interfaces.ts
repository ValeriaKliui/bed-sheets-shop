import { ModalProps } from '@ui/Modal/interfaces';

export interface CallModalProps extends ModalProps {
  title: string;
  onSubmit?: () => void;
  successText?: string;
}
