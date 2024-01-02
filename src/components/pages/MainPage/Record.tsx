import React from 'react';
import styled from 'styled-components';
import RecordCard from '../../common/RecordCard';
import recordsData from './recordsData';


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #FFFFFF; 
  min-height: 100vh;
  border-radius: 22px;
  width: 390px;
`;

const LogoHeader = styled.h1`
  font-size: 26px;
  margin-top: 15px;
  margin-left: 16px;
  font: var(--Pretendard-26B);
`;

const DateSection = styled.section`
  font-size: 18px;
  color: #000000;
  margin-top: 17px;
  margin-left: 16px;
  font: var(--Pretendard-18M);
`;

type TRecordPageProps = {
  dates: number;
}

const RecordPage: React.FC<TRecordPageProps> = ({ dates }) => {
  const year = Math.floor(dates / 10000); 
  const month = Math.floor((dates % 10000) / 100); 
  const date = dates % 100; 

  const formattedDate = `${year.toString().padStart(4, '0')}년 ${month.toString().padStart(2, '0')}월 ${date.toString().padStart(2, '0')}일`;


  return (
    <PageContainer>
      <LogoHeader>나의 기록</LogoHeader>
      <DateSection>{formattedDate}</DateSection>
      {recordsData.map((record, index) => (
        <RecordCard navigateTo={'/'} key={index} {...record} />
      ))}
    </PageContainer>
  );
};

export default RecordPage;
