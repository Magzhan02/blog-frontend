import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Header from './components/Header';

import Home from './pages/Home';
import FullPost from './pages/FullPost';

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Home />
        {/*   <FullPost /> */}
      </Container>
    </div>
  );
};

export default App;
