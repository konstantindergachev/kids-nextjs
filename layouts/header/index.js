import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Logo from '@/components/shared/logo';
import styles from './Header.module.css';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div
        className={`fas ${!menuIsOpen ? 'fa-times' : 'fa-bars'} ${styles.menuBars}`}
        onClick={toggleMobileMenu}
      ></div>
      {!menuIsOpen && <Navbar />}
    </header>
  );
};

export default Header;
