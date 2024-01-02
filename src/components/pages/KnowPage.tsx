import React, { useEffect } from 'react';
import styled from 'styled-components';
import BottomNav from '../common/BottomNav';
import { ReactComponent as BtnArrowSmall } from '../../images/btn_arrow_small.svg';
import { ReactComponent as BtnArrowBig } from '../../images/btn_arrow_big.svg';
import axios from 'axios';

const KnowPage: React.FC = () => {
  const BackHandler = () => {
    history.back();
  };

  useEffect(() => {
    axios
      .get('http://3.34.55.111:8080/knowledge', {
        params: { yy: 2024, mm: '05', dd: '06' },
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Header>
        <BtnArrowBig onClick={BackHandler} />
        <p>기록 작성</p>
      </Header>
      <DetailContainer>
        <MonthContainer>
          <button>
            <BtnArrowSmall transform="rotate(180)" />
          </button>
          <p>2023년 12월 7일</p>
          <button>
            <BtnArrowSmall />
          </button>
        </MonthContainer>
      </DetailContainer>
      <BottomNav />
    </Container>
  );
};

export default KnowPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f6fa;

  svg {
    cursor: pointer;
  }
`;

const DetailContainer = styled.div`
  width: 354px;
  height: 817px;
  border-radius: 16px;
  background: #fff;
`;

const MonthContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  button {
    background-color: transparent;
    border: none;
  }

  p {
    font: var(--Pretendard-18M);
  }
`;

const Header = styled.div`
  margin-top: 15px;
  margin-bottom: 42px;
  position: relative;

  svg {
    position: absolute;
    left: 0;
  }

  p {
    text-align: center;
    color: #000;
    font: var(--Pretendard-18M);
    margin-top: 7px;
  }
`;
