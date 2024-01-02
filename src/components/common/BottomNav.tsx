import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AddImg } from '../../images/plus_button.svg';
import { ReactComponent as BookClickImg } from '../../images/bookclick.svg';
import { ReactComponent as BookImg } from '../../images/book.svg';
import { ReactComponent as HomeClickImg } from '../../images/homeclick.svg';
import { ReactComponent as HomeImg } from '../../images/home.svg';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavContainer>
      <HomeBtn onClick={() => navigate('/')}>
        {location.pathname === '/' ? <HomeClickImg /> : <HomeImg />}
        <Text color={location.pathname === '/' ? '#358FFF' : '#BEC4C6'}>
          홈
        </Text>
      </HomeBtn>
      <AddBtn onClick={() => navigate('/write')}>
        <AddImg />
      </AddBtn>
      <RecordBtn onClick={() => navigate('/record')}>
        {location.pathname === '/record' ? <BookClickImg /> : <BookImg />}
        <Text color={location.pathname === '/record' ? '#358FFF' : '#BEC4C6'}>
          기록
        </Text>
      </RecordBtn>
    </NavContainer>
  );
};

export default BottomNav;

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 0;
  width: 390px;
  height: 97px;
  background-color: white;
  box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.07);
  z-index: 9999;
`;

const HomeBtn = styled.div`
  margin-left: 69px;
  margin-top: 11px;
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
`;

const Text = styled.div<{ color: string }>`
  margin-top: 3px;
  font: var(--Pretendard-12M);
  color: ${props => props.color};
`;

const AddBtn = styled.div`
  margin-bottom: 16px;
  position: relative;
  bottom: 25px;
  cursor: pointer;
`;

const RecordBtn = styled.div`
  display: flex;
  margin-right: 69px;
  margin-top: 11px;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
`;
