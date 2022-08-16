import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Header from './components/Header';
import { Home, FullPost, AddPost, Login } from './pages';

import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/slice/auth';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts/:id" element={<FullPost />} />
          <Route path="posts/:id/edit" element={<AddPost />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div> К сожалени данная страница отсутствует</div>} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
