import React, { useEffect, useState } from 'react';
import Button from '@/shared/button';

import styles from './Signin.module.css';

const Signin = ({ onClose }) => {
  return (
    <div className={styles.login}>
      <h3>вход</h3>
      <form action="">
        <input type="email" placeholder="test@example.com" />
        <input type="password" />
      </form>
      <div className={styles.buttonWrap}>
        <Button title="отмена" onClick={onClose} />
        <Button title="войти" />
      </div>
    </div>
  );
};

export default Signin;
