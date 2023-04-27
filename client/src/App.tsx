import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import OneCardPage from './components/pages/OneCardPage';

function App(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cards/:id" element={<OneCardPage />} />
      </Routes>
    </Container>
  );
}

export default App;
