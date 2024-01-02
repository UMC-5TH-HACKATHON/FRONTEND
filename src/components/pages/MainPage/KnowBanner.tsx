/*import React, { useEffect } from 'react';*/
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowImg } from '../../../images/btn_arrow_small.svg';
import { ReactComponent as KnowImg } from '../../../images/know.svg';
import { useNavigate } from 'react-router-dom';
/*import axios from 'axios';
import { useState } from 'react';*/

const KnowBanner: React.FC = () => {
  const navigate = useNavigate();
  /*const [variable, setVariable] = useState();

  useEffect(() => {
    axios.get(URL).then(response => {
      console.log(response.data);
      setVariable(response.data);
    });
  }, []);
*/
  return (
    <Container onClick={() => navigate('/')}>
      <TextBox>
        <TodayKnowContainer>오늘의 상식</TodayKnowContainer>
        <QuestionBox>
          영화관에서 팝콘을 먹는 이유는?
          <ArrowImg />
        </QuestionBox>
      </TextBox>
      <KnowBox>
        <KnowImg />
      </KnowBox>
    </Container>
  );
};

export default KnowBanner;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  top: 50px;
  width: 354px;
  height: 68px;
  background: #ffffff;
  border-radius: 18px;
  cursor: pointer;
`;
const TextBox = styled.div``;

const TodayKnowContainer = styled.div`
  margin-top: 10px;
  margin-left: 24.07px;
  width: 239.677px;
  text-align: left;
  font: var(--Pretendard-14M);

  color: #777777;
`;

const QuestionBox = styled.div`
  display: flex;
  margin-left: 24.07px;
  font: var(--Pretendard-16B);
  cursor: pointer;
  color: #000000;
`;

const KnowBox = styled.div`
  margin-left: 38.43px;
  margin-top: 10px;
`;
