import React from 'react';
import styles from './Error.module.css';

const Error = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

export default Error;
