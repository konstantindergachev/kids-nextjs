import React from 'react';
import { withRouter } from 'next/router';
import Image from 'next/image';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';

import { request } from '../../config/axios';

import styles from './Tales.module.css';

const Tales = ({ tales, router }) => {
  return (
    <>
      <AppHead title="Сказки" />
      <BaseLayout username={router.query?.username}>
        <section>
          <h1 className={styles.title}>Сказки</h1>
          <div className={styles.tales}>
            {tales.map((tale) => (
              <article key={tale.id}>
                <h3>{tale.title}</h3>
                <div className={styles.image}>
                  <Image src={tale.couplets[0].images[0]} alt="picture" width={200} height={200} />
                </div>
                <p>{tale.description}</p>
                <p>{tale.artist}</p>
              </article>
            ))}
          </div>
        </section>
      </BaseLayout>
    </>
  );
};

export default withRouter(Tales);

export async function getServerSideProps() {
  try {
    const { tales } = await request({ method: 'get', url: 'http://localhost:5000/tales' });
    return {
      props: { tales },
    };
  } catch (error) {
    console.log('catch error', error); //FIXME:
  }
}
