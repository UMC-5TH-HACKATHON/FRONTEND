import React from 'react';
import styled from 'styled-components';
import BottomNav from '../common/BottomNav';
import RecordHeader from './RecordPage/RecordHeader';
import RecordBtn from './RecordPage/RecordBtn';

const RecordPage: React.FC = () => {
  return (
    <RecordBox>
      <RecordHeader />
      <RecordBtn />
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
  text-align: center;
  background-color: #fff;
`;
