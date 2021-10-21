import React from 'react';
import Image from 'next/image';
import pic1 from '../../images/s1.jpg';
import pic2 from '../../images/s2.jpg';
import pic3 from '../../images/s3.jpg';
import pic4 from '../../images/s4.jpg';
import pic5 from '../../images/s5.jpg';
import pic6 from '../../images/s6.jpg';

import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={`${styles.services} ${styles.upAndDown}`}>
      <h1 className="heading">чему мы учим наших детей</h1>

      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <Image src={pic1} alt="picture one" />
          <div className={styles.info}>
            <h3 className={styles.boxTitle}>буквам и словам</h3>
          </div>
        </div>

        <div className={styles.box}>
          <Image src={pic2} alt="picture two" />
          <div className={styles.info}>
            <h3 className={styles.boxTitle}>лепить и мастерить</h3>
          </div>
        </div>

        <div className={styles.box}>
          <Image src={pic3} alt="picture three" />
          <div className={styles.info}>
            <h3 className={styles.boxTitle}>рисовать и писать</h3>
          </div>
        </div>

        <div className={styles.box}>
          <Image src={pic4} alt="picture four" />
          <div className={styles.info}>
            <h3 className={styles.boxTitle}>учить английский язык</h3>
          </div>
        </div>

        <div className={styles.box}>
          <Image src={pic5} alt="picture five" />
          <div className={styles.info}>
            <h3 className={styles.boxTitle}>знакомиться с детьми</h3>
          </div>
        </div>

        <div className={styles.box}>
          <Image src={pic6} alt="picture six" />
          <div className={styles.info}>
            <h3 className={styles.boxTitle}>играть в игры</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
