import React from 'react';
import styled from 'styled-components';

const BottomNav: React.FC = () => {
  return <NavContainer>네비게이션</NavContainer>;
};

export default BottomNav;

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 390px;
  background-color: blue;
`;
