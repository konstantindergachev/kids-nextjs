import React from 'react';
import Image from 'next/image';
import Button from '@/shared/button';
import picture from '../../images/home-img.png';

import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <section className={`${styles.home} ${styles.background}`}>
      <div className={styles.content}>
        <h1>Добро пожаловать к детворе</h1>
        <h3>делаем обучение веселым</h3>
        <p>
          Мы поможем вашим детям познакомится с миром общения с помощью увлекательных игр, которые
          разработаны нашими детскими учителями и детьми.
        </p>
        <Button title="узнать больше" />
      </div>

      <div className={styles.image}>
        <Image src={picture} alt="picture" />
      </div>
    </section>
  );
};

export default Welcome;
