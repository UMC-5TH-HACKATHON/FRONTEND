import React from 'react';
import styled from 'styled-components';
import RecordCard from '../../common/RecordCard';
import recordsData from './recordsData';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #ffffff;
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
};

const Record: React.FC<TRecordPageProps> = ({ dates }) => {
  const year = Math.floor(dates / 10000); // 년도 추출
  const month = Math.floor((dates % 10000) / 100); // 월 추출
  const date = dates % 100; // 일 추출

  // 날짜를 'YYYY년 MM월 DD일' 형식으로 변환
  const formattedDate = `${year}년 ${month.toString().padStart(2, '0')}월 ${date
    .toString()
    .padStart(2, '0')}일`;

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

export default Record;
