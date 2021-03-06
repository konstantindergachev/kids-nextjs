import React from 'react';
import Image from 'next/image';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';
import Couplet from '@/shared/couplet';
import TopButton from '@/shared/top-button';
import Error from '@/shared/error';
import { parse } from 'cookie';

import { request } from '../../config/axios';
import { api } from '@/constants';

import styles from './Tales.module.css';

const Tale = ({ tale }) => {
  if (tale.hasOwnProperty('error')) {
    return (
      <>
        <AppHead title="Сказка" />
        <BaseLayout>
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
      <BaseLayout>
        <section>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{tale.title}</h1>
            <h3 className={styles.subtitle}>{tale.artist}</h3>
          </div>
          <ol className={styles.container}>
            {tale.couplets.map((couplet, idx) => {
              return (
                <Couplet key={idx}>
                  <div className={styles.image}>
                    <Image src={couplet.images[0]} alt="picture" width={600} height={500} />
                  </div>
                  {couplet.text.map((paragraph, idx) => (
                    <p key={idx} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </Couplet>
              );
            })}
          </ol>
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
    const { tale } = await request({
      method: 'get',
      url: `${api.url}/tales/${query.tale}`,
      headers: { Authorization: `Bearer ${cookies.kids}` },
    });
    return { props: { tale } };
  } catch (error) {
    const tale = {};
    tale.error = error.data?.message;
    return {
      props: { tale },
    };
  }
}
