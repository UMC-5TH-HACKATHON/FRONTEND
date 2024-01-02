import React, { useState } from 'react';
import styled from 'styled-components';
import BottomNav from '../common/BottomNav';
import RecordBtn from './RecordPage/RecordBtn';
import { ReactComponent as SearchImg } from '../../images/search.svg';
import { ReactComponent as CloseImg } from '../../images/btn_Close_round.svg';

const RecordPage: React.FC = () => {
  const [text, setText] = useState('');

  function SearchClick() {
    console.log('Search');
  }

  function CloseClick() {
    console.log('Close');
  }

  const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;
    setText(target);
  };

  return (
    <RecordBox>
      <HeaderBox>
        <SearchBox>
          <SearchClickBox onClick={SearchClick}>
            <SearchImg />
          </SearchClickBox>
          <InputBox
            placeholder="기록을 검색해보세요"
            value={text}
            onInput={onInputHandler}
          />
          <CloseClickBox onClick={CloseClick}>
            <CloseImg />
          </CloseClickBox>
        </SearchBox>
      </HeaderBox>
      <RecordBtn texts={text} />
      <BottomNav />
    </RecordBox>
  );
};

export default RecordPage;

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

const SearchBox = styled.div`
  width: 350px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const SearchClickBox = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
`;
const CloseClickBox = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const InputBox = styled.input`
  width: 350px;
  border-width: 0;
`;

const RecordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  text-align: center;
`;
