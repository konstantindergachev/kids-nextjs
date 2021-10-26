import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';
import Card from '@/shared/card';
import TopButton from '@/shared/top-button';

import { request } from '../../config/axios';

import styles from './Tales.module.css';

const Tale = ({ tale }) => {
  const { query } = useRouter();
  return (
    <>
      <AppHead title={tale.title} />
      <BaseLayout username={query?.username}>
        <section>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{tale.title}</h1>
            <h3 className={styles.subtitle}>{tale.artist}</h3>
          </div>
          <div className={styles.container}>
            {tale.couplets.map((couplet, idx) => {
              return (
                <Card key={idx}>
                  <div className={styles.image}>
                    <Image src={couplet.images[0]} alt="picture" width={600} height={500} />
                  </div>
                  {couplet.text.map((paragraph, idx) => (
                    <p key={idx} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </Card>
              );
            })}
          </div>
        </section>
      </BaseLayout>
      <TopButton pathname={`/tales/${tale.slug}?username=${query?.username}`} />
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
