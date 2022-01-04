import React from 'react';
import styles from './Couplet.module.css';

const Couplet = ({ children, classname = '' }) => {
  return <li className={`${styles.couplet} ${classname}`}>{children}</li>;
};

export default Couplet;
