import React from 'react';
/*import { useNavigate } from 'react-router-dom';*/
import styled from 'styled-components';
import { useState } from 'react';

const RecordBtn: React.FC = () => {
  const [page, setPage] = useState('1');
  function handleMyRecord() {
    setPage('1');
  }
  function handleExplore() {
    setPage('2');
  }
  return (
    <Container>
      <MyRecordbtn>
        나의 기록
        <BlueLayOut />
      </MyRecordbtn>
      <RecordExplore>
        기록 둘러보기
        <GrayLayOut />
      </RecordExplore>
    </Container>
  );
};

export default RecordBtn;

const Container = styled.div`
  height: 47px;
  width: 390px;
  display: flex;
  flex-direction: row;
  margin-top: 74px;
`;
const MyRecordbtn = styled.div`
  width: 195px;
  font: var(--Pretendard-14M);
  text-align: center;
  :hover {
    color: #358fff;
  }
  cursor: pointer;
`;
const RecordExplore = styled.div`
  width: 195px;
  text-align: center;
  font: var(--Pretendard-14M);
  cursor: pointer;
`;

const BlueLayOut = styled.div`
  width: 195px;
  height: 3px;
  background-color: #358fff;
`;

const GrayLayOut = styled.div`
  width: 195px;
  height: 3px;
  background-color: #f5f6fa;
`;
