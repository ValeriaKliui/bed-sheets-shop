'use client';

import Portal from '@ui/Portal';
import { useRef } from 'react';

import styles from './styles.module.scss';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { ModalProps } from './interfaces';
import colors from "@variables.module.scss";
import CircledIcon from '@ui/CircledIcon';
import Gap from '@ui/Gap';

const { bg } = colors;


export default function Modal({ children, closeModal }: ModalProps) {
  const modalContainerRef = useRef(null);

  useOnClickOutside(modalContainerRef, closeModal)

  return (
    <Portal selector="modal">
      <div className={styles.backdrop}>
        <Gap className={styles.container} ref={modalContainerRef} direction='vertical' alignItems='flex-end'>
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
    </Portal >
  );
}
