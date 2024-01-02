import React from 'react';
/*import { useNavigate } from 'react-router-dom';*/
import styled from 'styled-components';

const RecordBtn: React.FC = () => {
  return (
    <Container>
      <MyRecordbtn>나의 기록</MyRecordbtn>
      <RecordExplore>기록 둘러보기</RecordExplore>
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
  color: #358fff;
`;
const RecordExplore = styled.div`
  width: 195px;
  font: var(--Pretendard-14M);
`;
