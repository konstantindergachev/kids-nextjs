import React from 'react';
import { withRouter } from 'next/router';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';

import styles from './Tales.module.css';

const Tales = ({ router }) => {
  return (
    <>
      <AppHead title="Сказки" />
      <BaseLayout username={router.query?.username}>
        <section className={styles.test}>
          <h1>Tales page</h1>
        </section>
      </BaseLayout>
    </>
  );
};

export default withRouter(Tales);
