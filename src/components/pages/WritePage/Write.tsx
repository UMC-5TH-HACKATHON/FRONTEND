import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BtnArrowBig } from '../../../images/btn_arrow_big.svg';
import NextButton from '../../common/NextButton';
import { ComponentType } from '../WritePage';

type TWriteProps = {
  // eslint-disable-next-line no-unused-vars
  componentChangeHandler: (ComponentType: ComponentType) => void;
  // eslint-disable-next-line no-unused-vars
  newcontents: (contents: string) => void;
  contents: string;
};

const Write: React.FC<TWriteProps> = ({
  componentChangeHandler,
  newcontents,
  contents,
}) => {
  const onTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target.value;
    newcontents(target);
  };

  const BackHandler = () => {
    history.back();
  };

  const NextHandler = () => {
    newcontents(contents);
    componentChangeHandler('Page');
  };

  return (
    <Container>
      <Header>
        <BtnArrowBig onClick={BackHandler} />
        <p>기록 작성</p>
      </Header>
      <h1>
        오늘의 학습 기록을 <br /> 작성해주세요
      </h1>
      <textarea
        placeholder="오늘의 학습한 내용을 기록해주세요!"
        minLength={1}
        onInput={onTextareaHandler}
        value={contents}
        spellCheck={false}
      />
      <NextButton
        text="다음"
        disabled={contents === ''}
        onClick={NextHandler}
        style={{ position: 'absolute', bottom: '36px', width: '100%' }}
      />
    </Container>
  );
};

export default Write;

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
    height: 442px;
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
    margin-top: 7px;
  }
`;
