import React from 'react';
import styled from 'styled-components';
import recordsData from '../../pages/MainPage/recordsData';
import RecordCard from '../../common/RecordCard';

const MyRecord: React.FC = () => {
  return (
    <div>
      <TodayText>
        오늘 나의 기록
        {recordsData.map((record, index) => (
          <RecordCard key={index} {...record} />
        ))}
      </TodayText>
      <Separation />
      <TodayText>나의 모든기록</TodayText>
      <TodayDecription>나의 기록들을 최신순으로 보여드려요.</TodayDecription>
      {recordsData.map((record, index) => (
        <RecordCard key={index} {...record} />
      ))}
    </div>
  );
};

export default MyRecord;

const Separation = styled.div`
  width: 390px;
  height: 12px;
  flex-shrink: 0;
  margin-top: 10px;
  display: flex;
  background-color: #f5f6fa;
`;

const TodayText = styled.div`
  font: var(--Pretendard-20B);
`;

const TodayDecription = styled.div`
  font: var(--Pretendard-14M);
  color: #767a83;
`;
