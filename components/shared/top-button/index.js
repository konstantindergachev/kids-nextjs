import React from 'react';
import Link from 'next/link';

import styles from './TopButton.module.css';

const TopButton = () => {
  return (
    <div className={styles.topButton}>
      <Link href="/">&#9650;</Link>
    </div>
  );
};

export default TopButton;
