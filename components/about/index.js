import React from 'react';
import Image from 'next/image';
import Button from '../shared/button';
import picture from '../../images/about-img.png';

import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.image}>
        <Image src={picture} alt="picture" />
      </div>

      <div className={styles.content}>
        <h3>a word about us</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi quod consequuntur
          dolor molestiae magnam magni veritatis? Tenetur optio excepturi harum eius quaerat labore
          cumque dolorem dignissimos alias. Perspiciatis, expedita.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit minima odio est unde
          nesciunt necessitatibus, fugiat laboriosam quidem magni? Maxime?
        </p>
        <Button title={'learn more'} />
      </div>
    </section>
  );
};

export default About;
