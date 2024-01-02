import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Calendar from './MainPage/Calendar';
import KnowBanner from './MainPage/KnowBanner';
import RecordPage from './MainPage/RecordPage';

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
      <KnowBanner />
      <Calendar setDates={setDates} />
      <div>
      <RecordPage dates={dates} />
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
`;