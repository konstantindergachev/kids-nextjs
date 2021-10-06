import React from 'react';
import Button from '../shared/button';

import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <section className={`${styles.pricing} ${styles.upAndDown}`}>
      <h1 className="heading">our pricing plans</h1>

      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3 classNameName={styles.boxTitle}>weekly</h3>
          <div className={styles.boxPrice}>
            <span>$</span>20
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem magnam rem harum,
            nostrum facilis labore excepturi dignissimos? Voluptatibus facere beatae quam quasi!
            Vero fugit molestias officiis quam, corrupti earum aliquid?
          </p>
          <Button title={'select more'} />
        </div>

        <div className={styles.box}>
          <span classNameName={styles.boxChoise}>
            best <br /> choise
          </span>
          <h3 classNameName={styles.boxTitle}>monthly</h3>
          <div classNameName={styles.boxPrice}>
            <span>$</span>50
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem magnam rem harum,
            nostrum facilis labore excepturi dignissimos? Voluptatibus facere beatae quam quasi!
            Vero fugit molestias officiis quam, corrupti earum aliquid?
          </p>
          <Button title={'select more'} />
        </div>

        <div className={styles.box}>
          <h3 classNameName={styles.boxTitle}>yearly</h3>
          <div className={styles.boxPrice}>
            <span>$</span>250
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem magnam rem harum,
            nostrum facilis labore excepturi dignissimos? Voluptatibus facere beatae quam quasi!
            Vero fugit molestias officiis quam, corrupti earum aliquid?
          </p>
          <Button title={'select more'} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
