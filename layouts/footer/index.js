import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        дизайн сайта создан <span> мр. веб дизайнер </span> | сверстан{' '}
        <span>Константин Дергачёв</span>
      </div>
      <div>
        Все права <span>защищены!</span> | &copy;<span> {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
