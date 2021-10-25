import React from 'react';
import Button from '../shared/button';

import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <section id="pricing" className={`${styles.pricing} ${styles.upAndDown}`}>
      <h1 className="heading">цены и услуги</h1>

      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>недельный</h3>
          <div className={styles.boxPrice}>
            <span>530 </span>&#8372;
          </div>
          <ol>
            <li>Консультация логопеда-дефектолога</li>
            <li>Комплексное развитие</li>
            <li>Рисование</li>
            <li>Красивый почерк</li>
            <li>Английский язык</li>
          </ol>
          <Button title="Узнать больше" />
        </div>

        <div className={styles.box}>
          <span className={styles.boxChoise}>
            лучший <br /> выбор
          </span>
          <h3 className={styles.boxTitle}>месячный</h3>
          <div className={styles.boxPrice}>
            <span>1325 </span>&#8372;
          </div>
          <ol>
            <li>Консультация логопеда-дефектолога</li>
            <li>Комплексное развитие: первые 5 уроков</li>
            <li>Рисование</li>
            <li>Красивый почерк</li>
            <li>Английский язык</li>
            <li>Футбол</li>
            <li>Театральная студия</li>
            <li>Вокал</li>
            <li>Робототехника</li>
            <li>Подготовка к школе</li>
          </ol>
          <Button title="Узнать больше" />
        </div>

        <div className={styles.box}>
          <h3 className={styles.boxTitle}>годовой</h3>
          <div className={styles.boxPrice}>
            <span>6625 </span>&#8372;
          </div>
          <ol>
            <li>Консультация логопеда-дефектолога</li>
            <li>Комплексное развитие: первые 5 уроков</li>
            <li>Рисование</li>
            <li>Красивый почерк</li>
            <li>Английский язык</li>
            <li>Футбол</li>
            <li>Театральная студия</li>
            <li>Вокал</li>
            <li>Робототехника</li>
            <li>Подготовка к школе</li>
            <li>Шахматный клуб</li>
            <li>Фитнес с элементами ритмики и ЛФК</li>
            <li>Вокальный ансамбль</li>
            <li>Гитара</li>
            <li>Индивидуальные занятия со специалистом</li>
          </ol>
          <Button title="Узнать больше" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
