import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Header from './components/Header';

import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Home />
      </Container>
    </div>
  );
};

export default App;
