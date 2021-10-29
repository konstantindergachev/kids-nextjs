import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/shared/button';
import Error from '@/shared/error';

import styles from './Signin.module.css';

const Signin = ({ onClose }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (ev) => {
    setUser((oldState) => ({ ...oldState, [ev.target.name]: ev.target.value }));
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      await fetch('http://localhost:3000/api/user/login', {
        method: 'post',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
      });
      router.push({ pathname: '/tales' });
    } catch (error) {
      setError(error?.data?.message || error?.data?.errors.message);
    }
  };

  return (
    <div className={styles.login}>
      <h3>вход</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="ваш email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="ваш пароль"
          value={user.password}
          onChange={handleChange}
        />
        {error && <Error message={error} />}
        <div className={styles.buttonWrap}>
          <Button title="отмена" onClick={onClose} />
          <Button type="submit" title="войти" />
        </div>
      </form>
    </div>
  );
};

export default Signin;
