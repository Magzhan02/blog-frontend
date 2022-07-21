import React from 'react';
import { Container, Button } from '@mui/material';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a href="/">
            <div className={styles.logo}>Personal-Blog</div>
          </a>
          <div className={styles.button}>
            <a href="/posts/create">
              <Button variant="outlined">Написать статью</Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
