import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BtnArrowBig } from '../../../images/btn_arrow_big.svg';
import NextButton from '../../common/NextButton';
import FinishModal from '../../modal/FinishModal';
import { ComponentType } from '../WritePage';

type THashTagProps = {
  // eslint-disable-next-line no-unused-vars
  componentChangeHandler: (ComponentType: ComponentType) => void;
  contents: string;
  category: string;
  hashTag: string;
  // eslint-disable-next-line no-unused-vars
  newhashTag: (hashTag: string) => void;
};

const HashTag: React.FC<THashTagProps> = ({
  componentChangeHandler,
  contents,
  category,
  hashTag,
  newhashTag,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); //모달창 여부

  const BackHandler = () => {
    componentChangeHandler('Page');
  };

  const onTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target.value;
    newhashTag(target);
  };

  const DataHandler = () => {
    setIsModalOpen(true);
    console.log(contents + category + hashTag);
  };

  return (
    <Container>
      <Header>
        <BtnArrowBig onClick={BackHandler} />
      </Header>
      <h1>해시태그를 추가해주세요</h1>
      <textarea
        placeholder="해시태그를 추가해주세요&#13;&#10;해시태그 사이에 공백없이 적어주세요.
EX) #해커톤#디자인"
        minLength={1}
        onInput={onTextareaHandler}
        value={hashTag}
        spellCheck={false}
      />
      <NextButton
        text="완료"
        disabled={hashTag === ''}
        onClick={DataHandler}
        style={{ position: 'absolute', bottom: '36px', width: '100%' }}
      />
      <FinishModal isOpen={isModalOpen} />
    </Container>
  );
};

export default HashTag;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    cursor: pointer;
  }

  h1 {
    color: #000;
    font: var(--Pretendard-26B);
    text-align: left;
    margin-bottom: 36px;
  }

  textarea {
    color: #4f555e;
    font: var(--Pretendard-18M);
    width: 354px;
    height: 157px;
    background-color: #f5f6fa;
    border-radius: 8px;
    border: none;
    padding: 24px;
    outline: none;
    resize: none;

    &::placeholder {
      color: #bec4c6;
    }
  }
`;

const Header = styled.div`
  margin-top: 30px;
  margin-bottom: 36px;
  position: relative;

  svg {
    float: left;
  }
`;
