import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';

import { request } from '../../config/axios';

import styles from './Tales.module.css';

const Tale = ({ tale }) => {
  const { query } = useRouter();
  return (
    <>
      <AppHead title={tale.title} />
      <BaseLayout username={query?.username}>
        <section className={styles.tales}>
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>{tale.title}</h1>
            <h3>{tale.artist}</h3>
          </div>
          <div className={styles.tales}>
            {tale.couplets.map((couplet, idx) => {
              return (
                <article key={idx}>
                  <div className={styles.image}>
                    <Image src={couplet.images[0]} alt="picture" width={600} height={500} />
                  </div>
                  {couplet.text.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </article>
              );
            })}
          </div>
        </section>
      </BaseLayout>
    </>
  );
};

export default Tale;

export async function getStaticPaths() {
  try {
    const { tales } = await request({ method: 'get', url: 'http://localhost:5000/tales' });

    const paths = tales.map((tale) => ({
      params: { slug: tale.slug },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log('getStaticPaths catch error', error); //FIXME:
  }
}

export async function getStaticProps({ params }) {
  try {
    const { tale } = await request({
      method: 'get',
      url: `http://localhost:5000/tales/${params.slug}`,
    });
    return { props: { tale } };
  } catch (error) {
    console.log('getStaticProps catch error', error); //FIXME:
  }
}
