import React, { useEffect, useState } from 'react';
import Button from '@/shared/button';
import { notifyService } from '@/services';

import styles from './Signup.module.css';

const Signup = ({ onClose }) => {
  const [user, setUser] = useState({ firstname: '', lastname: '', email: '', password: '' });
  const handleChange = (ev) => {
    setUser((oldState) => ({ ...oldState, [ev.target.name]: ev.target.value }));
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    notifyService.create({ endpoint: 'users', content: user });
  };
  return (
    <div className={styles.login}>
      <h3>зарегестрироваться</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="ваше имя"
          value={user.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="ваше фамилия"
          value={user.lastname}
          onChange={handleChange}
        />
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
        <div className={styles.buttonWrap}>
          <Button title="отмена" onClick={onClose} />
          <Button type="submit" title="регистрация" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
