import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './components/pages/MainPage';
import WritePage from './components/pages/WritePage';
import RecordPage from './components/pages/RecordPage';
import KnowPage from './components/pages/KnowPage';
import RecordDetail from './components/pages/RecordDetail';
import OnBoarding1 from './components/pages/OnBoarding1';
import MyPage from './components/pages/MyPage';

const App: React.FC = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/know" element={<KnowPage />} />
          <Route path="/record/detail" element={<RecordDetail />} />
          <Route path="/onBoard1" element={<OnBoarding1 />} />
          <Route path="/my" element={<MyPage />} />
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
