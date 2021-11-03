import React from 'react';
import styles from './Message.module.css';

const Message = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

export default Message;
