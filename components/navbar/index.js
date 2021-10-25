import { useState } from 'react';
import CustomLink from '@/shared/link';
import Modal from '@/shared/modal';
import Signin from '../auth/signin';
import Signup from '../auth/signup';
import UserNavbar from './user-navbar';

import styles from './Navbar.module.css';

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
      <CustomLink pathname="#" title="главная" />
      <CustomLink pathname="#features" title="особенности" />
      <CustomLink pathname="#about" title="о нас" />
      <CustomLink pathname="#services" title="сервисы" />
      <CustomLink pathname="#teachers" title="воспитатели" />
      <CustomLink pathname="#pricing" title="цена" />
      <CustomLink pathname="#contacts" title="контакт" />
      {username ? (
        <UserNavbar username={username} />
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
