import React from 'react';
import Button from '../shared/button';
import Card from '@/shared/card';

import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <section id="pricing" className={`${styles.pricing} ${styles.upAndDown}`}>
      <h1 className="heading">цены и услуги</h1>

      <div className={styles.container}>
        <Card classname={styles.weekly}>
          <h3 className={styles.title}>недельный</h3>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>530 </span>&#8372;
          </div>
          <ul className={styles.list}>
            <li>Консультация логопеда-дефектолога</li>
            <li>Комплексное развитие</li>
            <li>Рисование</li>
            <li>Красивый почерк</li>
            <li>Английский язык</li>
          </ul>
          <Button title="Узнать больше" />
        </Card>

        <Card classname={styles.monthly}>
          <span className={styles.choise}>
            лучший <br /> выбор
          </span>
          <h3 className={styles.title}>месячный</h3>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>1325 </span>&#8372;
          </div>
          <ul className={styles.list}>
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
          </ul>
          <Button title="Узнать больше" />
        </Card>

        <Card classname={styles.yearly}>
          <h3 className={styles.title}>годовой</h3>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>6625 </span>&#8372;
          </div>
          <ul className={styles.list}>
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
          </ul>
          <Button title="Узнать больше" />
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
