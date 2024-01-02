import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type TFinishModalProps = {
  isOpen: boolean;
};

const FinishModal: React.FC<TFinishModalProps> = ({ isOpen }) => {
  const navigate = useNavigate();

  return (
    <ModalBlackOut style={{ display: isOpen ? 'block' : 'none' }}>
      <ModalDiv>
        <h3>기록 완료</h3>
        <p>
          오늘의 학습기록 작성을 성공적으로
          <br /> 완료하였습니다.
        </p>
        <Button onClick={() => navigate('/')}>확인</Button>
      </ModalDiv>
    </ModalBlackOut>
  );
};

export default FinishModal;

const ModalBlackOut = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalDiv = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 312px;
  height: 200px;
  border-radius: 16px;
  background: #fff;
  padding: 24px 20px 0;

  h3 {
    color: #000;
    font: var(--Pretendard-20B);
    text-align: left;
  }

  p {
    margin-top: 12px;
    margin-bottom: 32px;
    text-align: left;
    color: #000;
    font: var(--Pretendard-16M);
  }
`;

const Button = styled.button`
  width: 272px;
  height: 40px;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: #358fff;
  font: var(--Pretendard-14M);
`;
