import React from 'react';
import Image from 'next/image';

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
              <i className="fas fa-map-marker-alt"></i> mumbai, india - 400104.{' '}
            </p>
            <p>
              {' '}
              <i className="fas fa-envelope"></i> example@gmail.com{' '}
            </p>
            <p>
              {' '}
              <i className="fas fa-phone"></i> +123-456-7890{' '}
            </p>
          </div>

          <div className={styles.box}>
            <h3 className={styles.title}>follow us</h3>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>

          <div className={styles.box}>
            <h3 className={styles.title}>newsletter</h3>
            <form action="">
              <input type="email" placeholder="enter your email" />
              <input type="submit" className={styles.btn} value="send" />
            </form>
          </div>
        </div>

        <form action="" className={styles.contactForm}>
          <h3>contact us</h3>

          <input type="text" placeholder="name" className={styles.box} />
          <input type="email" placeholder="email" className={styles.box} />
          <input type="number" placeholder="number" className={styles.box} />
          <textarea
            placeholder="message"
            className={`${styles.box} ${styles.message}`}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <input type="submit" className={styles.btn} value="send message" />
        </form>
      </div>

      <div className={styles.image}>
        <Image src={pic1} alt="picture" />
      </div>
    </section>
  );
};

export default Contacts;
