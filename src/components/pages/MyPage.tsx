import React from 'react';
import styled from 'styled-components';
import Mypage from '../../images/mypage.svg';
import { ReactComponent as BtnArrowBig } from '../../images/btn_arrow_big.svg';

const MyPageText = styled.p`
  text-align: center;
  color: #000;
  font: var(--Pretendard-18M);
`;

const HeaderContainer = styled.div`
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
    margin-top: 15px;
  }
`;

const MyPageContanier = styled.div`
  margin-top: 20px;
`;

const Header: React.FC = () => {
  const BackHandler = () => {
    window.history.back();
  };

  return (
    <HeaderContainer className="header-container">
      <div className="header-content">
        <BtnArrowBig onClick={BackHandler} />
        <MyPageText>마이페이지</MyPageText>
      </div>
      <MyPageContanier className="mypage-container">
        <img src={Mypage} alt="Mypage Icon" className="mypage-icon" />
      </MyPageContanier>
    </HeaderContainer>
  );
};

export default Header;
