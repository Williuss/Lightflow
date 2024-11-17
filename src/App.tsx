import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { MainLayout } from './layouts/main-layout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
