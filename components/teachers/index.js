import React from 'react';
import Image from 'next/image';
import pic1 from '../../images/teacher-1.png';
import pic2 from '../../images/teacher-2.png';
import pic3 from '../../images/teacher-3.png';
import pic4 from '../../images/teacher-4.png';

import styles from './Teachers.module.css';

const Teachers = () => {
  return (
    <section>
      <h1 className="heading">our amazing teachers</h1>

      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <Image src={pic1} alt="teacher one" />
          <h3 classNameName={styles.boxTitle}>john deo</h3>
          <span>teacher</span>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, molestiae ab soluta iste
            delectus facilis beatae earum reiciendis repellat, consequuntur sequi dolorem error,
            labore dolores ullam distinctio illo. Voluptas, molestias?
          </p>
        </div>

        <div className={styles.box}>
          <Image src={pic2} alt="teacher two" />
          <h3 classNameName={styles.boxTitle}>john deo</h3>
          <span>teacher</span>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, molestiae ab soluta iste
            delectus facilis beatae earum reiciendis repellat, consequuntur sequi dolorem error,
            labore dolores ullam distinctio illo. Voluptas, molestias?
          </p>
        </div>

        <div className={styles.box}>
          <Image src={pic3} alt="teacher three" />
          <h3 classNameName={styles.boxTitle}>john deo</h3>
          <span>teacher</span>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, molestiae ab soluta iste
            delectus facilis beatae earum reiciendis repellat, consequuntur sequi dolorem error,
            labore dolores ullam distinctio illo. Voluptas, molestias?
          </p>
        </div>

        <div className={styles.box}>
          <Image src={pic4} alt="teacher four" />
          <h3 classNameName={styles.boxTitle}>john deo</h3>
          <span>teacher</span>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, molestiae ab soluta iste
            delectus facilis beatae earum reiciendis repellat, consequuntur sequi dolorem error,
            labore dolores ullam distinctio illo. Voluptas, molestias?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
