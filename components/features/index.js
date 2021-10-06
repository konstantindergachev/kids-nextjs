import React from 'react';
import Image from 'next/image';
import pic1 from '../../images/left-icon1.png';
import pic2 from '../../images/left-icon2.png';
import pic3 from '../../images/left-icon3.png';
import stick from '../../images/stick.png';
import rightIcon1 from '../../images/right-icon1.png';
import rightIcon2 from '../../images/right-icon2.png';
import rightIcon3 from '../../images/right-icon3.png';

import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={`${styles.features} ${styles.upAndDown}`}>
      <div className={styles.boxContainer}>
        <h3 className={styles.title}>why childrens love us</h3>

        <div className={styles.box}>
          <Image src={pic1} alt="picture one" />
          <div className={styles.info}>
            <h3>funny conversations</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
          </div>
        </div>

        <div className={styles.box}>
          <Image src={pic2} alt="picture two" />
          <div className={styles.info}>
            <h3>Many activities</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
          </div>
        </div>

        <div className={styles.box}>
          <Image src={pic3} alt="picture 3" />
          <div className={styles.info}>
            <h3>fun non-stop</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
          </div>
        </div>
      </div>

      <Image src={stick} alt="stick" />

      <div className={styles.boxContainer}>
        <h3 className={styles.title}>why parents choose us</h3>

        <div className={styles.box}>
          <Image src={rightIcon1} alt="right icon one" />
          <div className={styles.info}>
            <h3>Continuous monitoring</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
          </div>
        </div>

        <div className={styles.box}>
          <Image src={rightIcon2} alt="right icon two" />
          <div className={styles.info}>
            <h3>Professionalism teachers</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
          </div>
        </div>

        <div className={styles.box}>
          <Image src={rightIcon3} alt="right icon 3" />
          <div className={styles.info}>
            <h3>Developed programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
