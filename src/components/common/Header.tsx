import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return <HeaderContainer>헤더</HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 390px;
  background-color: red;
`;
