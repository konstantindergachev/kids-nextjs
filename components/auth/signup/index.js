import { Fragment, useState } from 'react';
import Button from '@/shared/button';
import Error from '@/shared/error';
import Message from '@/components/shared/message';
import { notifyService } from '@/services';

import { form, signupSchema } from './config';
import styles from './Signup.module.css';

const Signup = ({ onClose }) => {
  const [user, setUser] = useState({ firstname: '', lastname: '', email: '', password: '' });
  const [requestError, setRequestError] = useState('');
  const [inputError, setInputError] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const validate = (field) => async () => {
    try {
      await signupSchema.validateAt(field, user);
      setInputError((old) => ({ ...old, [field]: '' }));
    } catch (error) {
      setInputError((old) => ({ ...old, [field]: error.message }));
    }
  };

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
      setRequestError(error?.data?.message);
    }
  };
  return (
    <div className={styles.login}>
      <h3>зарегестрироваться</h3>
      <form onSubmit={handleSubmit}>
        {form.inputs.map((input) => (
          <Fragment key={input.id}>
            <input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={user[input.value]}
              onChange={handleChange}
              onBlur={validate(input.name)}
              onKeyPress={validate(input.name)}
            />
            <Error message={inputError[input.name]} />
          </Fragment>
        ))}
        {requestError && <Error message={requestError} />}
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
