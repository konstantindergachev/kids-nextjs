import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';

import { request } from '../../config/axios';

import styles from './Tales.module.css';

const Tales = ({ tales }) => {
  const { query } = useRouter();
  return (
    <>
      <AppHead title="Сказки" />
      <BaseLayout username={query?.username}>
        <section>
          <h1 className={styles.title}>Сказки</h1>
          <div className={styles.tales}>
            {tales.map((tale) => (
              <article key={tale.id}>
                <h3>{tale.title}</h3>
                <div className={styles.image}>
                  <Image src={tale.couplets[0].images[0]} alt="picture" width={600} height={500} />
                </div>
                <p>{tale.description}</p>
                <p>{tale.artist}</p>
                <Link
                  href={{
                    pathname: `/tales/[slug]`,
                    query: { username: query?.username },
                  }}
                >
                  Читать
                </Link>
              </article>
            ))}
          </div>
        </section>
      </BaseLayout>
    </>
  );
};

export default Tales;

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
