import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/shared/button';
import { FormItem } from '@/shared/form-item';
import Error from '@/shared/error';
import { notifyService } from '@/services';

import { form, signinSchema } from './config';
import styles from './Signin.module.css';

const Signin = ({ onClose }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [requestError, setRequestError] = useState('');
  const [inputError, setInputError] = useState({ email: '', password: '' });
  const router = useRouter();

  const validate = (field) => async () => {
    try {
      await signinSchema.validateAt(field, user);
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
      const response = await notifyService.create({
        endpoint: 'api/user/login',
        content: user,
      });
      if (response?.username) {
        router.push({ pathname: '/tales' });
      }
    } catch (error) {
      setRequestError(error?.data?.message || error?.data?.errors?.message);
    }
  };

  return (
    <div className={styles.login}>
      <h3>вход</h3>
      <form onSubmit={handleSubmit}>
        {form.inputs.map((input) => (
          <Fragment key={input.id}>
            <FormItem
              item={input}
              value={user}
              onChange={handleChange}
              onBlur={validate}
              onKeyPress={validate}
            />
            <Error message={inputError[input.name]} />
          </Fragment>
        ))}
        {requestError && <Error message={requestError} />}
        <div className={styles.buttonWrap}>
          <Button title="отмена" onClick={onClose} />
          <Button type="submit" title="войти" />
        </div>
      </form>
    </div>
  );
};

export default Signin;
