import { useState } from 'react';
import Modal from '@/shared/modal';

import styles from './Navbar.module.css';
import Signin from '../auth/signin';
import Signup from '../auth/signup';
import Button from '../shared/button';

const Navbar = ({ username = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccount, setIsAccount] = useState(false);

  const handleModalOpen = () => () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAccount = () => {
    setIsAccount(!isAccount);
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
      {username ? (
        <>
          <Button title="выйти" />
          <span>{username}</span>
        </>
      ) : (
        <button type="button" onClick={handleModalOpen()}>
          <i className="fas fa-user"></i>
        </button>
      )}
      <Modal isOpen={isModalOpen} onClose={handleModalOpen()}>
        {!isAccount ? (
          <>
            <Signin onClose={handleModalOpen()} />
            <p>
              Нет учетной записи?{' '}
              <span type="button" onClick={handleAccount}>
                создать
              </span>
            </p>
          </>
        ) : (
          <>
            <Signup onClose={handleModalOpen()} />
            <p>
              Есть учетная запись?{' '}
              <span type="button" onClick={handleAccount}>
                войти
              </span>
            </p>
          </>
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
