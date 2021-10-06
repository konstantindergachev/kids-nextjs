import React from 'react';
import Image from 'next/image';
import Button from '@/shared/button';
import picture from '../../images/home-img.png';

import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <section className={`${styles.home} ${styles.background}`}>
      <div className={styles.content}>
        <h1>welcome to kidzies</h1>
        <h3>making education more fun.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusamus eum, dolore
          officiis facilis fugiat sint. Animi unde blanditiis, ab quibusdam illum minus
          exercitationem dolore expedita asperiores odit, consectetur iusto.
        </p>
        <Button title={'learn more'} />
      </div>

      <div className={styles.image}>
        <Image src={picture} alt="picture" />
      </div>
    </section>
  );
};

export default Welcome;
