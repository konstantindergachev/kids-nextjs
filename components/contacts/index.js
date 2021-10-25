import React from 'react';
import Image from 'next/image';
import Button from '@/shared/button';

import pic1 from '../../images/contact-img.png';

import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <section className={styles.contact}>
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
            <form action="">
              <input type="email" placeholder="test@example.com" />
              <Button type="submit" title="отправить" />
            </form>
          </div>
        </div>

        <form action="" className={styles.contactForm}>
          <h3>Напиши нам</h3>

          <input type="text" placeholder="текст" />
          <input type="email" placeholder="test@example.com" />
          <input type="number" placeholder="число" />
          <textarea placeholder="сообщение" name="" id="" cols="30" rows="10"></textarea>
          <Button type="submit" title="отправить сообщение" />
        </form>
      </div>

      <div className={styles.image}>
        <Image src={pic1} alt="picture" />
      </div>
    </section>
  );
};

export default Contacts;
