import React from 'react';
import Image from 'next/image';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';
import Card from '@/shared/card';
import CustomLink from '@/shared/link';
import Error from '@/shared/error';
import { parse } from 'cookie';

import { request } from '../../config/axios';

import styles from './Tales.module.css';

const Tales = ({ tales, username = '' }) => {
  if (tales.hasOwnProperty('error')) {
    return (
      <>
        <AppHead title="Сказки" />
        <BaseLayout username={username}>
          <section>
            <Error message={tales.error} />
          </section>
        </BaseLayout>
      </>
    );
  }

  return (
    <>
      <AppHead title="Сказки" />
      <BaseLayout username={username}>
        <section>
          <h1 className={styles.title}>Сказки</h1>
          <div className={styles.container}>
            {tales.map((tale) => (
              <Card key={tale.id}>
                <h3 className={styles.subtitle}>{tale.title}</h3>
                <div className={styles.image}>
                  <Image src={tale.couplets[0].images[0]} alt="picture" width={600} height={500} />
                </div>
                <p className={styles.paragraph}>{tale.description}</p>
                <p className={styles.paragraph}>{tale.artist}</p>
                <CustomLink
                  pathname={{
                    pathname: `/tales/[tale]`,
                    query: { tale: tale.slug },
                  }}
                  title="читать"
                />
              </Card>
            ))}
          </div>
        </section>
      </BaseLayout>
    </>
  );
};

export default Tales;

export async function getServerSideProps({ req, res }) {
  const cookies = parse(req.headers.cookie);

  try {
    const { tales, username } = await request({
      method: 'get',
      url: 'http://localhost:5000/tales/first-pages',
      headers: { Authorization: `Bearer ${cookies.kids}` },
    });
    return {
      props: { tales, username },
    };
  } catch (error) {
    const tales = {};
    tales.error = error.data.message;
    return {
      props: { tales },
    };
  }
}
