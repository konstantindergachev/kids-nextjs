import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <button type="button">home</button>
      <button type="button">features</button>
      <button type="button">about</button>
      <button type="button">services</button>
      <button type="button">teacher</button>
      <button type="button">pricing</button>
      <button type="button">contact</button>
    </nav>
  );
};

export default Navbar;
