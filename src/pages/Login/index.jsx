import React from 'react';
import { Typography, TextField, Paper, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { fetchAuth, isAuthUser } from '../../redux/slice/auth';

import styles from './Login.module.scss';

const Login = () => {
  const dispath = useDispatch();
  const isAuth = useSelector(isAuthUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (params) => {
    const data = await dispath(fetchAuth(params));

    if (!data.payload) {
      dispath(fetchAuth(null));
      return alert('Не удалось авторизоваться');
    }

    if (data.payload.token) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper classes={{ root: styles.login }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Не указана почта' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          error={Boolean(errors.password?.message)}
          label="Пароль"
          helperText={errors.password?.message}
          type="password"
          {...register('password', { required: 'Неверный пароль' })}
          fullWidth
        />
        <Button
          type="submit"
          size="large"
          variant="contained"
          disabled={isValid ? false : true}
          fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
