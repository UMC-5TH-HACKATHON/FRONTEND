import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Calendar from './MainPage/Calendar';
import KnowBanner from './MainPage/KnowBanner';
import RecordCard from './MainPage/Record';
import Header from '../common/Header';

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
      <KnowBanner />
      <Calendar setDates={setDates} />
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
