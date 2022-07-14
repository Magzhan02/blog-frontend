import React from 'react';
import { Container, Button } from '@mui/material';

import styles from './Header.module.scss';

const Header = () => {
  const [isAuth, setIsAuth] = React.useState(true);

  return (
    <div className={styles.header}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a href="/">
            <div className={styles.logo}>Personal-Blog</div>
          </a>
          <div className={styles.button}>
            {isAuth ? (
              <>
                <a href="/posts/create">
                  <Button variant="outlined">Написать статью</Button>
                </a>
                <Button variant="outlined" color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <a href="/login">
                  <Button variant="outlined">Войти</Button>
                </a>
                <a href="/register">
                  <Button variant="outlined">Создать аккаунт</Button>
                </a>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
