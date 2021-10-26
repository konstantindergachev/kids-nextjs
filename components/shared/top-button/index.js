import React from 'react';
import Link from 'next/link';

import styles from './TopButton.module.css';

const TopButton = ({ pathname }) => {
  return (
    <div className={styles.topButton}>
      <Link href={pathname}>&#9650;</Link>
    </div>
  );
};

export default TopButton;
