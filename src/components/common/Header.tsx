import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImg } from '../../images/logo@3x 1.svg';
import { ReactComponent as MyPageImg } from '../../images/myPageLogo.svg';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const goToMyPage = () => {
    navigate('/my'); // '/mypage' 경로로 이동
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => navigate('/')}>
        <LogoImg />
      </LogoContainer>
      <MyPageLogo>
        <MyPageImg />
      </MyPageLogo>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 390px;
  background-color: #f5f6fa;
  z-index: 9999;
`;

const LogoContainer = styled.div`
  float: left;
  margin-left: 25px;
  margin-top: 9px;
  margin-bottom: 13.15px;
  cursor: pointer;
`;

const MyPageLogo = styled.div`
  float: right;
  margin-right: 25px;
  margin-top: 16px;
  cursor: pointer;
`;
