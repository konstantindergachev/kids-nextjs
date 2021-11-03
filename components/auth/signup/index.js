import { useState } from 'react';
import Button from '@/shared/button';
import Error from '@/shared/error';
import Message from '@/components/shared/message';
import { notifyService } from '@/services';

import styles from './Signup.module.css';

const Signup = ({ onClose }) => {
  const [user, setUser] = useState({ firstname: '', lastname: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (ev) => {
    setUser((oldState) => ({ ...oldState, [ev.target.name]: ev.target.value }));
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const { success, message } = await notifyService.create({
        port: 5000,
        endpoint: 'users',
        content: user,
      });
      if (success) {
        setMessage(message);
      }
    } catch (error) {
      setError(error?.data?.message);
    }
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
        {error && <Error message={error} />}
        {message && <Message message={message} />}
        <div className={styles.buttonWrap}>
          <Button title="отмена" onClick={onClose} />
          <Button type="submit" title="регистрация" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
