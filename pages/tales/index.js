import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';
import Card from '@/shared/card';
import CustomLink from '@/shared/link';

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
                    pathname: `/tales/[slug]`,
                    query: { slug: tale.slug, username: query?.username },
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

export async function getServerSideProps() {
  try {
    const { tales } = await request({
      method: 'get',
      url: 'http://localhost:5000/tales/first-pages',
    });
    return {
      props: { tales },
    };
  } catch (error) {
    console.log('catch error', error); //FIXME:
  }
}
