import React from 'react';
import Link from 'next/link';

import styles from './Link.module.css';

const CustomLink = ({ pathname, title }) => {
  return (
    <Link href={pathname}>
      <a className={styles.link}>{title}</a>
    </Link>
  );
};

export default CustomLink;
