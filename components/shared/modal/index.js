import { createPortal } from 'react-dom';
import Button from '../button';

import styles from './Modal.module.css';

export default function Modal({ isOpen, children, onClose }) {
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
        <div className={styles.content}>{children}</div>
        <Button title="отмена" onClick={onClose} />
        <Button title="войти" />
      </div>
    </>,
    document.getElementById('modal')
  );
}
