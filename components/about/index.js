import React from 'react';
import Image from 'next/image';
import Button from '../shared/button';
import picture from '../../images/about-img.png';

import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.image}>
        <Image src={picture} alt="picture" />
      </div>

      <div className={styles.content}>
        <h3>пару слов о нас</h3>
        <p>
          Приходя в "Детвора", Вы выбираете квалифицированную помощь, направленную на достижение
          Вашим ребёнком поставленных задач. Работа выстроена в комфортном режиме для ребенка —
          такой подход дает максимальные результаты за короткий срок. После каждого занятия родитель
          получает рекомендации от специалистов.
        </p>
        <p>
          Главной задачей команды "Детвора" является всестороннее развитие ребенка с самого раннего
          возраста, начиная с одного года. Помимо этого, вся наша работа направлена на укрепление
          семейных отношений при помощи организации совместного досуга детей и родителей.
        </p>
        <Button title="Узнать больше" />
      </div>
    </section>
  );
};

export default About;
