import React from 'react';
import Image from 'next/image';
import pic1 from '../../images/teacher-1.png';
import pic2 from '../../images/teacher-2.png';
import pic3 from '../../images/teacher-3.png';
import pic4 from '../../images/teacher-4.png';
import Card from '@/shared/card';

import styles from './Teachers.module.css';

const Teachers = () => {
  return (
    <section id="teachers">
      <h1 className="heading">друзья-наставники</h1>

      <div className={styles.container}>
        <Card classname={styles.background}>
          <Image src={pic1} alt="teacher one" className={styles.image} width={150} height={150} />
          <h3 className={styles.title}>Ксения Андреевна Лобусова</h3>
          <span className={styles.subtitle}>друг-педагог</span>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p className={styles.paragraph}>
            Окончила харьковскую государственную академию дизайна и искусств. Диплом по
            специальности "промышленный дизайн". Художник-график, иллюстратор. Стаж работы с детьми
            -7 лет. Работает в частных клубах.
          </p>
        </Card>

        <Card classname={styles.background}>
          <Image src={pic2} alt="teacher two" className={styles.image} width={150} height={150} />
          <h3 className={styles.title}>Антон Викторович Сухов</h3>
          <span className={styles.subtitle}>друг-тренер</span>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p className={styles.paragraph}>
            Тренер по шахматам. КМС. Опыт тренерской работы с детьми — 7 лет. Окончил Харьковский
            национальный университет радиоэлектроники (ХНУРЕ) по специальности «информационные
            управляющие системы и технологии».
          </p>
        </Card>

        <Card classname={styles.background}>
          <Image src={pic3} alt="teacher three" className={styles.image} width={150} height={150} />
          <h3 className={styles.title}>Ольга Валерьевны Пухова</h3>
          <span className={styles.subtitle}>друг-педагог</span>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p className={styles.paragraph}>
            Окончила харьковский национальный университет искусств им. И.П. Котляревского (ХНУМ).
            Наставник по "истории украинской музыки" и ведет "практикум по современной музыки". Опыт
            тренерской работы с детьми — 5 лет.
          </p>
        </Card>

        <Card classname={styles.background}>
          <Image src={pic4} alt="teacher four" className={styles.image} width={150} height={150} />
          <h3 className={styles.title}>Павел Сергеевич Антонов</h3>
          <span className={styles.subtitle}>друг-тренер</span>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p className={styles.paragraph}>
            окончил харьковскую государственную академию физической культуры. Тренер по фитнесу.
            Педагог по комплексному развитию детей 3-15 лет. Опыт тренерской работы — более 5 лет.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Teachers;
