import React from 'react';
import Navbar from '@/components/navbar';
import Logo from '@/components/shared/logo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />

      <div className={`fas fa-bars ${styles.menu__bars}`}></div>

      <Navbar />
    </header>
  );
};

export default Header;
