import React, { FC } from 'react';

import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import styles from './ErrorModal.module.css';

export const ERROR_MODAL_TEST_ID = 'error-modal';
export const ERROR_MODAL_RELOAD_BUTTON_TEST_ID = 'error-modal-reload-button';

type ErrorModalProps = {
  message: string;
  reload?: () => void;
};

const ErrorModal: FC<ErrorModalProps> = ({ message, reload }) => {
  const history = useHistory();

  const is404 = message === '404: Not Found';

  const reloadHandler = () => {
    if (is404) {
      history.replace('/');
    } else {
      history.go(0);
    }
  };

  return (
    <Modal
      ariaHideApp={false}
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen
      contentLabel="Error Modal"
      testId={ERROR_MODAL_TEST_ID}
    >
      <header className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Error</h2>
      </header>

      <div className={styles.modalBody}>
        <p>{message}</p>
      </div>
      <footer className={styles.modalFooter}>
        <button
          data-testid={ERROR_MODAL_RELOAD_BUTTON_TEST_ID}
          onClick={reloadHandler}
        >
          {is404 ? 'Go to home page' : 'Reload'}
        </button>
      </footer>
    </Modal>
  );
};

export default ErrorModal;
