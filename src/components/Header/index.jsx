import React from 'react';
import { Container, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { isAuthUser } from '../../redux/slice/auth';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  const isAuth = useSelector(isAuthUser);
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
                <Link to="addpost">
                  <Button variant="outlined">Написать статью</Button>
                </Link>
                <Button variant="outlined" color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="login">
                  <Button variant="outlined">Войти в аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
