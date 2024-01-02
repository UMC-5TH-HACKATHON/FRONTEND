import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BtnArrowBig } from '../../../images/btn_arrow_big.svg';
import { ReactComponent as BookCheck } from '../../../images/book_check_duotone.svg';
import { ReactComponent as Polygon } from '../../../images/polygon.svg';
import NextButton from '../../common/NextButton';
import { ComponentType } from '../WritePage';
import axios from 'axios';

type TCategoryProps = {
  // eslint-disable-next-line no-unused-vars
  componentChangeHandler: (ComponentType: ComponentType) => void;
  // eslint-disable-next-line no-unused-vars
  newcategory: (category: string) => void;
  // eslint-disable-next-line no-unused-vars
  newcategorynum: (id: number) => void;
  category: string;
};

type TCategory = {
  id: number;
  name: string;
};

const Category: React.FC<TCategoryProps> = ({
  componentChangeHandler,
  newcategory,
  newcategorynum,
  category,
}) => {
  const [view, setView] = useState(false);
  const [categoryData, setCategoryData] = useState<TCategory[]>();

  useEffect(() => {
    axios
      .get('http://3.34.55.111:8080/posts/categories')
      .then(res => {
        setCategoryData(res.data.result);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const BackHandler = () => {
    componentChangeHandler('Write');
  };

  const CategoryHandler = (name: string, id: number) => {
    newcategory(name);
    newcategorynum(id);
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
            {categoryData?.map(item => {
              return (
                <CategoryDiv
                  key={item.id}
                  onClick={() => CategoryHandler(item.name, item.id)}
                  color={item.name === category ? '#358FFF' : '#000'}
                >
                  {item.name}
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
