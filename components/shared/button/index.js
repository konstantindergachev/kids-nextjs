import React from 'react';
import styles from './Button.module.css';

const Button = ({ title }) => {
  return <button className={styles.btn}>{title}</button>;
};

export default Button;
