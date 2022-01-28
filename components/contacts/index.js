import { Fragment, useState } from 'react';
import Image from 'next/image';
import Button from '@/shared/button';
import { FormItem } from '@/shared/form-item';
import Error from '@/shared/error';
import Message from '@/shared/message';

import { form, magicTextSchema } from './config';
import { notifyService } from '@/services';

import pic1 from '../../images/contact-img.png';

import styles from './Contacts.module.css';

const Contacts = () => {
  const [letter, setMagicLetter] = useState({
    magic_title: '',
    magic_email: '',
    magic_number: 0,
    magic_text: '',
  });
  const [requestError, setRequestError] = useState('');
  const [inputError, setInputError] = useState({
    magic_title: '',
    magic_email: '',
    magic_number: '',
    magic_text: '',
  });
  const [message, setMessage] = useState('');
  const [newsLetterEmail, setNewsLetterEmail] = useState('');

  const validate = (field) => async () => {
    try {
      await magicTextSchema.validateAt(field, letter);
      setInputError((old) => ({ ...old, [field]: '' }));
    } catch (error) {
      console.log('error.message', error.message); //FIXME: remove me
      setInputError((old) => ({ ...old, [field]: error.message }));
    }
  };

  const handleChange = (ev) => {
    setMagicLetter((oldState) => ({ ...oldState, [ev.target.name]: ev.target.value }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await notifyService.create({
        port: 5000,
        endpoint: 'letters',
        content: letter,
      });

      if (response?.success) {
        setMessage(response.message);
      }
    } catch (error) {
      setRequestError(error?.data?.message || error?.data?.errors.message);
    }
  };

  const handleChangeNewsLetter = (ev) => {
    setNewsLetterEmail(ev.target.value);
  };

  const handleNewsLetterSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await notifyService.create({
        port: 5000,
        endpoint: 'users/news',
        content: { email: newsLetterEmail },
      });
      if (response?.success) {
        setMessage(response.message);
      }
    } catch (error) {
      setRequestError(error?.data?.message || error?.data?.errors.message);
    }
  };

  return (
    <section id="contacts" className={styles.contact}>
      <div className={styles.row}>
        <div className={styles.contactInfo}>
          <div className={styles.box}>
            <h3 className={styles.title}>контакты</h3>
            <p>
              {' '}
              <i className="fas fa-map-marker-alt"></i> харьков, украина - 61001{' '}
            </p>
            <p>
              {' '}
              <i className="fas fa-envelope"></i> test@example.com{' '}
            </p>
            <p>
              {' '}
              <i className="fas fa-phone"></i> +123-456-7890{' '}
            </p>
          </div>

          <div className={styles.box}>
            <h3 className={styles.title}>мы здесь</h3>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>

          <div className={styles.box}>
            <h3 className={styles.title}>новости</h3>
            <form onSubmit={handleNewsLetterSubmit}>
              <input type="email" placeholder="magic@email.com" onChange={handleChangeNewsLetter} />
              <Button type="submit" title="подписаться" />
            </form>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3>Напиши нам</h3>
          {requestError && <Error message={requestError} />}
          {message && <Message message={message} />}
          {form.inputs.map((input) => (
            <Fragment key={input.id}>
              <FormItem
                item={input}
                value={letter}
                onChange={handleChange}
                onBlur={validate}
                onKeyPress={validate}
              />
              <Error message={inputError[input.name]} />
            </Fragment>
          ))}
          <Button type="submit" title="отправить" />
        </form>
      </div>

      <div className={styles.image}>
        <Image src={pic1} alt="picture" />
      </div>
    </section>
  );
};

export default Contacts;
