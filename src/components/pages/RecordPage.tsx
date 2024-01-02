import React from 'react';
import styled from 'styled-components';
import BottomNav from '../common/BottomNav';
import RecordHeader from './RecordPage/RecordHeader';
import RecordBtn from './RecordPage/RecordBtn';
import { useState, useEffect } from 'react';
import RecordCard from '../common/RecordCard';
import recordsData from '../pages/MainPage/recordsData';

const RecordPage: React.FC = () => {
  return (
    <RecordBox>
      <RecordHeader />
      <RecordBtn />
      <TodayText>오늘 나의 기록</TodayText>
      <Separation />
      <TodayText>나의 모든기록</TodayText>
      <TodayDecription>나의 기록들을 최신순으로 보여드려요.</TodayDecription>

      <BottomNav />
    </RecordBox>
  );
};

export default RecordPage;

const RecordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  text-align: left;
`;

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
