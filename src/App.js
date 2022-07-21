import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Header from './components/Header';

import { Home, FullPost, AddPost } from './pages';

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        {/* <Home />
        <FullPost /> */}
        <AddPost />
      </Container>
    </div>
  );
};

export default App;
