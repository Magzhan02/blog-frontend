import React from 'react';
import { Container, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { isAuthUser, logout } from '../../redux/slice/auth';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthUser);

  const onClickLogout = () => {
    if (window.confirm('Вы уверены что хотите выйти из аккаунта?')) {
      dispatch(logout());
    }
  };

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
                <Button onClick={onClickLogout} variant="outlined" color="error">
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
