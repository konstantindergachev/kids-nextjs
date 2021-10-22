import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

export default function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className={styles.modalWrapper}
        onClick={onClose}
        tabIndex={0}
        onKeyDown={onClose}
        role={'button'}
      ></div>
      <div className={styles.modalBox}>
        <div className={`fa fa-times ${styles.close}`} onClick={onClose}></div>
        <div className={styles.content}>{children}</div>
      </div>
    </>,
    document.getElementById('modal')
  );
}
