'use client';

import CallForm from '@ui/CallForm';
import Gap from '@ui/Gap';
import Modal from '@ui/Modal';
import clsx from 'clsx';
import { useState } from 'react';

import styles from './styles.module.scss';
import CircledIcon from '@ui/CircledIcon';
import useModal from '@hooks/useModal';
import SuccessInfo from '@ui/SuccessModal';

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
      <a
        className={clsx('link', styles.link)}
        onClick={openFormModal}
      >
        Заказать звонок
      </a>
      {isFormModalOpen && (
        <Modal closeModal={closeFormModal}>
          <Gap
            direction="vertical"
            alignItems="flex-start"
            size="medium"
          >
            <Gap
              justifyContent="space-between"
              className={styles.header}
            >
              <h3>Заказать звонок</h3>
            </Gap>
            <CallForm onSubmit={onFormSubmit} />
          </Gap>
        </Modal>
      )}
      {isSuccessModalOpen && (
        <Modal closeModal={closeSuccessModal}>
          <SuccessInfo onAgree={closeSuccessModal} />
        </Modal>
      )}
    </>
  );
}
