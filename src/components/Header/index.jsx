import React from 'react';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
            <Link to="addpost">
              <Button variant="outlined">Написать статью</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
