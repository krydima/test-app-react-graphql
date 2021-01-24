import React, { FC } from 'react';

import Modal from 'react-aria-modal';
import { Link } from 'react-router-dom';
import styles from './ErrorModal.module.css';

export const ERROR_MODAL_TEST_ID = 'error-modal';
export const ERROR_MODAL_RELOAD_BUTTON_TEST_ID = 'error-modal-reload-button';

type ErrorModalProps = {
  message: string;
  reload?: () => void;
};

const defaultReload = () => window.location.reload();

const ErrorModal: FC<ErrorModalProps> = ({
  message,
  reload = defaultReload,
}) => {
  const is404 = message === '404: Not Found';
  const isShowReload = !is404;

  return (
    <Modal
      titleText="Error Modal"
      initialFocus="#reload-button"
      verticallyCenter
      mounted
    >
      <div data-testid={ERROR_MODAL_TEST_ID} className={styles.modal}>
        <header className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Error</h2>
        </header>
        <div className={styles.modalBody}>
          <p>{message}</p>
        </div>
        <footer className={styles.modalFooter}>
          {isShowReload ? (
            <button
              data-testid={ERROR_MODAL_RELOAD_BUTTON_TEST_ID}
              onClick={reload}
              id="reload-button"
            >
              Reload
            </button>
          ) : (
            <Link
              data-testid={ERROR_MODAL_RELOAD_BUTTON_TEST_ID}
              onClick={reload}
              id="reload-button"
              to="/"
            >
              Go to home page
            </Link>
          )}
        </footer>
      </div>
    </Modal>
  );
};

export default ErrorModal;
