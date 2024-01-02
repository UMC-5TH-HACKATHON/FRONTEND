import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import RecordCard from '../../common/RecordCard';

type TRecordBtnProps = {
  texts: string;
};

type TPostDate = {
  title: string;
  content: string;
  createdAt: string;
  tagList: string[];
};

const RecordBtn: React.FC<TRecordBtnProps> = ({ texts }) => {
  const [postDate, setPostDate] = useState<TPostDate[]>();

  useEffect(() => {
    axios
      .get('http://3.34.55.111:8080/posts/search/', {
        params: { tagName: texts },
      })
      .then(res => {
        setPostDate(res.data.result.postSearchTagDTOList);
      })
      .catch(error => {
        console.error(error);
      });

    axios
      .get('http://3.34.55.111:8080/posts/')
      .then(res => {
        console.log(res.data.result.postPreviewList);
        setPostDate(res.data.result.postPreviewList);
      })
      .catch(error => {
        console.error(error);
      });
  }, [texts]);

  return (
    <Container>
      <Div style={{ paddingLeft: '18px' }}>
        <h2>다른 유저들의 최신 기록</h2>
        {postDate?.map((record, index) => (
          <RecordCard
            navigateTo={'/record/detail'}
            key={index}
            title={record.title}
            content={record.content}
            date={record.createdAt}
            tags={record.tagList}
          />
        ))}
      </Div>
    </Container>
  );
};

export default RecordBtn;

const Container = styled.div`
  width: 390px;
  display: flex;
  flex-direction: row;
  margin-top: 74px;
`;

const Div = styled.div`
  margin-bottom: 130px;

  h2 {
    text-align: left;
    font: var(--Pretendard-20B);
    color: #000;
  }
`;
