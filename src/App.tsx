import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './components/pages/MainPage';
import WritePage from './components/pages/WritePage';
import RecordPage from './components/pages/RecordPage';
import TodayKnow from './components/pages/TodayKnow';
import KnowPage from './components/pages/KnowPage';

const App: React.FC = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/know" element={<TodayKnow />} />
          <Route path="/know" element={<KnowPage />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};
export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 390px;
  min-height: 100vh;
  background-color: #fff;
`;
