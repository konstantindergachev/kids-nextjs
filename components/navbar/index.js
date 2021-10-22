import { useState } from 'react';
import Modal from '@/shared/modal';

import styles from './Navbar.module.css';
import Signin from '../auth/signin';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <nav className={styles.navbar}>
      <button type="button">главная</button>
      <button type="button">особенности</button>
      <button type="button">о нас</button>
      <button type="button">сервисы</button>
      <button type="button">воспитатели</button>
      <button type="button">цена</button>
      <button type="button">контакты</button>
      <button type="button" onClick={handleModalOpen()}>
        <i className="fas fa-user"></i>
      </button>
      <Modal isOpen={isModalOpen} onClose={handleModalOpen()}>
        <Signin onClose={handleModalOpen()} />
        <p>
          нет учетной записи? <span>создать</span>
        </p>
      </Modal>
    </nav>
  );
};

export default Navbar;
