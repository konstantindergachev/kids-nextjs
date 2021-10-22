import React, { useEffect, useState } from 'react';
import Button from '@/shared/button';

import styles from './Signup.module.css';

const Signup = ({ onClose }) => {
  return (
    <div className={styles.login}>
      <h3>зарегестрироваться</h3>
      <form action="">
        <input type="text" placeholder="ваше имя" />
        <input type="text" placeholder="ваше фамилия" />
        <input type="email" placeholder="ваш email" />
        <input type="password" placeholder="ваш пароль" />
      </form>
      <div className={styles.buttonWrap}>
        <Button title="отмена" onClick={onClose} />
        <Button title="регистрация" />
      </div>
    </div>
  );
};

export default Signup;
