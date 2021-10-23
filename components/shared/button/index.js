import React from 'react';
import styles from './Button.module.css';

const Button = ({ type = 'button', title, onClick }) => {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
