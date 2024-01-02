import React, { useState } from 'react';
import styled from 'styled-components';
import Write from './WritePage/Write';
import Category from './WritePage/Category';
import HashTag from './WritePage/HashTag';

export type ComponentType = 'Write' | 'Page' | 'HashTag';

const WritePage: React.FC = () => {
  const [component, setComponent] = useState<ComponentType>('Write');
  const [contents, setContents] = useState('');
  const [category, setCategory] = useState('');
  const [hashTag, setHashTag] = useState('');
  const [categoryNum, setCategoryNum] = useState(0);

  const componentChangeHandler = (ComponentType: ComponentType) => {
    setComponent(ComponentType);
  };

  return (
    <Container>
      {component === 'Write' ? (
        <Write
          componentChangeHandler={componentChangeHandler}
          newcontents={setContents}
          contents={contents}
        />
      ) : component === 'Page' ? (
        <Category
          componentChangeHandler={componentChangeHandler}
          newcategory={setCategory}
          newcategorynum={setCategoryNum}
          category={category}
        />
      ) : (
        <HashTag
          componentChangeHandler={componentChangeHandler}
          contents={contents}
          categoryNum={categoryNum}
          hashTag={hashTag}
          newhashTag={setHashTag}
        />
      )}
    </Container>
  );
};

export default WritePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
