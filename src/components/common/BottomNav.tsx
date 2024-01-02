import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HomeImg } from '../../images/home.svg';
import { ReactComponent as AddImg } from '../../images/plus_button.svg';
import { ReactComponent as BookImg } from '../../images/book.svg';
import { useNavigate } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <HomeBtn onClick={() => navigate('/')}>
        <HomeImg />홈
      </HomeBtn>
      <AddBtn onClick={() => navigate('/')}>
        <AddImg />
      </AddBtn>
      <RecordBtn onClick={() => navigate('/')}>
        <BookImg />
        <div>기록</div>
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
`;

const HomeBtn = styled.div`
  font: var(--Pretendard-12M);
  margin-left: 69px;
  margin-top: 11px;
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
`;

const AddBtn = styled.div`
  margin-bottom: 16px;
  position: relative;
  bottom: 36px;
  cursor: pointer;
`;

const RecordBtn = styled.div`
  font: var(--Pretendard-12M);
  display: flex;
  margin-right: 69px;
  margin-top: 11px;
  flex-direction: column;

  text-align: center;
  cursor: pointer;
`;
