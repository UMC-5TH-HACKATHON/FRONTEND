import React from 'react';
import styled from 'styled-components';
import Calendar from './MainPage/Calendar';
import KnowBanner from './MainPage/KnowBanner';
import RecordCard from './MainPage/Record';

const MainPage: React.FC = () => {
  return (
    <Container>
      <KnowBanner />
      <Calendar />
      <div>
        <p>나의 기록</p>
        <RecordCard />
      </div>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #d8e4ec;
`;
