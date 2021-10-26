import React from 'react';
import Link from 'next/link';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link href="/#">
      <a className={styles.logo}>
        <i className="fas fa-child"></i>детвора
      </a>
    </Link>
  );
};

export default Logo;
