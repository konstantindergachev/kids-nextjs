import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        design created by <span> mr. web designer </span> | all rights reserved!
      </div>
      <div>
        &copy;<span> {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
