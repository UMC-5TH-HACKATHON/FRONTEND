import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BottomNav from '../common/BottomNav';
import { ReactComponent as BtnArrowSmall } from '../../images/btn_arrow_small.svg';
import { ReactComponent as BtnArrowBig } from '../../images/btn_arrow_big.svg';
import axios from 'axios';

type TData = {
  title: string;
  content: string;
  imgUrl: string;
};

const KnowPage: React.FC = () => {
  const [data, setData] = useState<TData>();

  const BackHandler = () => {
    history.back();
  };

  useEffect(() => {
    axios
      .get('http://3.34.55.111:8080/knowledge', {
        params: { yy: 2024, mm: '05', dd: '06' },
      })
      .then(res => {
        setData(res.data.result);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Container>
        <Header>
          <BtnArrowBig onClick={BackHandler} />
          <p>오늘의 상식</p>
        </Header>
        <DetailContainer>
          <MonthContainer>
            <button>
              <BtnArrowSmall transform="rotate(180)" />
            </button>
            <p>2023년 01월 03일</p>
            <button>
              <BtnArrowSmall />
            </button>
          </MonthContainer>
          {data && (
            <Div>
              <img src={data.imgUrl} alt="사진" />
              <h1>{data.title}</h1>
              <p>{data.content}</p>
            </Div>
          )}
        </DetailContainer>
      </Container>
      <BottomNav />
    </>
  );
};

export default KnowPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f6fa;
  padding: 0 18px;

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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  img {
    width: 314px;
    height: 204.409px;
  }

  h1 {
    padding: 0 20px;
    margin-top: 47px;
    float: left;
    font: var(--Pretendard-26B);
    color: #000;
  }

  p {
    padding: 0 20px;
    margin-top: 16px;
    float: left;
    font: var(--Pretendard-16R);
    color: #000;
  }
`;
