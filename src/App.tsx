import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './components/pages/MainPage';
import Header from './components/common/Header';
import BottomNav from './components/common/BottomNav';

const App: React.FC = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </AppContainer>
  );
};
export default App;

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 390px;
  min-height: 100vh;
  background-color: #fff;
`;
