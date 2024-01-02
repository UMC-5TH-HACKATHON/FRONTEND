import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BtnArrowBig } from '../../../images/btn_arrow_big.svg';
import { ReactComponent as BookCheck } from '../../../images/book_check_duotone.svg';
import { ReactComponent as Polygon } from '../../../images/polygon.svg';
import NextButton from '../../common/NextButton';
import { ComponentType } from '../WritePage';

type TCategoryProps = {
  // eslint-disable-next-line no-unused-vars
  componentChangeHandler: (ComponentType: ComponentType) => void;
  // eslint-disable-next-line no-unused-vars
  newcategory: (category: string) => void;
  category: string;
};

const Category: React.FC<TCategoryProps> = ({
  componentChangeHandler,
  newcategory,
  category,
}) => {
  const [view, setView] = useState(false);
  const CategoryData = [
    '마케팅',
    '프로그래밍',
    '데이터 사이언스',
    '디자인',
    '기획',
    '금융 · 재테크',
    '창업 · 부업',
    '직접 추가',
  ];

  const BackHandler = () => {
    componentChangeHandler('Write');
  };

  const CategoryHandler = (item: string) => {
    newcategory(item);
    setView(false);
  };

  const NextHandler = () => {
    newcategory(category);
    componentChangeHandler('HashTag');
  };

  return (
    <>
      <Container>
        <Header>
          <BtnArrowBig onClick={BackHandler} />
        </Header>
        <h1>카테고리를 선택해주세요</h1>
        <CategoryBtn onClick={() => setView(true)}>
          <BookCheck style={{ left: '14px' }} />
          {category === '' ? (
            <SelectText color="#4F555E">카테고리를 선택해주세요</SelectText>
          ) : (
            <SelectText color="#000">{category}</SelectText>
          )}
          <Polygon style={{ right: '26px' }} />
        </CategoryBtn>
        <NextButton
          text="다음"
          disabled={category === ''}
          onClick={NextHandler}
          style={{ marginTop: '494px', marginBottom: '36px' }}
        />
      </Container>
      {view && (
        <ModalBlackOut>
          <SelectDiv>
            <h2>카테고리를 선택해주세요</h2>
            {CategoryData.map((item, index) => {
              return (
                <CategoryDiv
                  key={index}
                  onClick={() => CategoryHandler(item)}
                  color={item === category ? '#358FFF' : '#000'}
                >
                  {item}
                </CategoryDiv>
              );
            })}
          </SelectDiv>
        </ModalBlackOut>
      )}
    </>
  );
};

export default Category;

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
`;

const Header = styled.div`
  margin-top: 15px;
  margin-bottom: 36px;
  position: relative;

  svg {
    float: left;
  }
`;

const CategoryBtn = styled.button`
  position: relative;
  width: 354px;
  height: 61px;

  display: flex;
  align-items: center;

  background-color: #f5f6fa;
  border-radius: 8px;
  border: none;

  svg {
    position: absolute;
  }
`;

const SelectText = styled.div<{ color: string }>`
  margin-left: 56px;
  font: var(--Pretendard-18M);
  color: ${props => props.color};
`;

const SelectDiv = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  width: 390px;
  height: 539px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 20px 20px 0px 0px;

  h2 {
    font: var(--Pretendard-20B);
    margin-top: 32px;
    margin-bottom: 40px;
    margin-left: 32px;
  }
`;

const CategoryDiv = styled.div<{ color: string }>`
  margin-left: 32px;
  margin-bottom: 28px;
  font: var(--Pretendard-16R);
  color: ${props => props.color};
  cursor: pointer;
`;

const ModalBlackOut = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;
