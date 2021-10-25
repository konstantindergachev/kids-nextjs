import React from 'react';
import { useRouter } from 'next/router';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';

import styles from './Tales.module.css';

const Tale = () => {
  const { query } = useRouter();
  return (
    <>
      <AppHead title="Сказка" />
      <BaseLayout username={query?.username}>
        <section>
          <h1 className={styles.title}>Tale {query?.slug} page</h1>
        </section>
      </BaseLayout>
    </>
  );
};

export default Tale;
