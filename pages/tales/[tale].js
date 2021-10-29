import React from 'react';
import Image from 'next/image';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';
import Card from '@/shared/card';
import TopButton from '@/shared/top-button';
import Error from '@/shared/error';
import { parse } from 'cookie';

import { request } from '../../config/axios';

import styles from './Tales.module.css';

const Tale = ({ tale, username = '' }) => {
  if (tale.hasOwnProperty('error')) {
    return (
      <>
        <AppHead title="Сказка" />
        <BaseLayout username={username}>
          <section>
            <Error message={tale.error} />
          </section>
        </BaseLayout>
      </>
    );
  }
  return (
    <>
      <AppHead title={tale.title} />
      <BaseLayout username={username}>
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
      <TopButton pathname={`/tales/${tale.slug}`} />
    </>
  );
};

export default Tale;

export async function getServerSideProps({ req, query }) {
  const cookies = parse(req.headers.cookie);
  try {
    const { tale, username } = await request({
      method: 'get',
      url: `http://localhost:5000/tales/${query.tale}`,
      headers: { Authorization: `Bearer ${cookies.kids}` },
    });
    return { props: { tale, username } };
  } catch (error) {
    const tale = {};
    tale.error = error.data?.message;
    return {
      props: { tale },
    };
  }
}
