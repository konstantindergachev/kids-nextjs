import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/shared/button';
import Error from '@/shared/error';
import { notifyService } from '@/services';

import { form } from './config';
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
      const response = await notifyService.create({
        port: 3000,
        endpoint: '/api/user/login',
        content: user,
      });
      if (response?.username) {
        router.push({ pathname: '/tales' });
      }
    } catch (error) {
      setError(error?.data?.message || error?.data?.errors.message);
    }
  };

  return (
    <div className={styles.login}>
      <h3>вход</h3>
      <form onSubmit={handleSubmit}>
        {form.inputs.map((input) => (
          <input
            key={input.id}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={user[input.value]}
            onChange={handleChange}
          />
        ))}
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
