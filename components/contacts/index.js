import { useState } from 'react';
import Image from 'next/image';
import Button from '@/shared/button';
import Error from '@/shared/error';
import Message from '@/shared/message';

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
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [newsLetterEmail, setNewsLetterEmail] = useState('');

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
      setError(error?.data?.message || error?.data?.errors.message);
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
      setError(error?.data?.message || error?.data?.errors.message);
    }
  };

  return (
    <section id="contacts" className={styles.contact}>
      <div className={styles.row}>
        <div className={styles.contactInfo}>
          <div className={styles.box}>
            <h3 className={styles.title}>contact details</h3>
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
              <Button type="submit" title="отправить" />
            </form>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3>Напиши нам</h3>
          {error && <Error message={error} />}
          {message && <Message message={message} />}
          <input
            type="text"
            name="magic_title"
            placeholder="твоя магическая тема"
            onChange={handleChange}
          />
          <input
            type="email"
            name="magic_email"
            placeholder="твой магический адрес (test@example.com)"
            onChange={handleChange}
          />
          <input
            type="number"
            name="magic_number"
            placeholder="твое магическое число"
            onChange={handleChange}
          />
          <textarea
            placeholder="сообщение"
            name="magic_text"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
          <Button type="submit" title="отправить нам" />
        </form>
      </div>

      <div className={styles.image}>
        <Image src={pic1} alt="picture" />
      </div>
    </section>
  );
};

export default Contacts;
