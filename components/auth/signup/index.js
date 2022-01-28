import { useState } from 'react';
import Button from '@/shared/button';
import Error from '@/shared/error';
import Message from '@/components/shared/message';
import { notifyService } from '@/services';

import { form } from './config';
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
