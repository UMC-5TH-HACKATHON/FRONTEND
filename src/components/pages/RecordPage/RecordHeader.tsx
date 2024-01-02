import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const RecordHeader: React.FC = () => {
  return (
    <HeaderBox>
      <Search></Search>
    </HeaderBox>
  );
};

export default RecordHeader;

const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  width: 390px;
  height: 64px;
  background-color: #358fff;
  display: flex;
  gap: 135px;
  justify-content: center;
`;
