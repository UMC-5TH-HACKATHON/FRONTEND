import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Calendar from './MainPage/Calendar';
import KnowBanner from './MainPage/KnowBanner';
import RecordCard from './MainPage/Record';
import Header from '../common/Header';
import BottomNav from '../common/BottomNav';

const MainPage: React.FC = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}${
    today.getMonth() + 1
  }${today.getDate()}`;
  const [dates, setDates] = useState(Number(formattedDate));

  useEffect(() => {
    console.log(dates);
  }, [dates]);

  return (
    <Container>
      <Header />
      <div style={{ marginTop: '10px', marginBottom: '36px' }}>
        <KnowBanner />
      </div>
      <Calendar setDates={setDates} />
      <div style={{ marginTop: '44px' }}>
        <p>나의 기록</p>
        <RecordCard />
      </div>
      <BottomNav />
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
  background-color: #f5f6fa;
`;
