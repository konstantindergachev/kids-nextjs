import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, classname = '' }) => {
  return <li className={`${styles.card} ${classname}`}>{children}</li>;
};

export default Card;
