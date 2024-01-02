import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecordCard from '../../common/RecordCard';
import axios from 'axios';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 22px;
  width: 390px;
  margin-bottom: 100px;
`;

const LogoHeader = styled.h1`
  font-size: 26px;
  margin-top: 15px;
  margin-left: 16px;
  font: var(--Pretendard-26B);
`;

const DateSection = styled.section`
  font-size: 18px;
  color: #000000;
  margin-top: 17px;
  margin-left: 16px;
  font: var(--Pretendard-18M);
`;

const FalseDiv = styled.div`
  margin-top: 10px;
  width: 354px;
  height: 165px;
  border-radius: 10px;
  background: #f5f6fa;
  font: var(--Pretendard-14R);
  color: #85888a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type TRecordPageProps = {
  dates: number;
  view: boolean | string;
};

type TPostDate = {
  title: string;
  content: string;
  createdAt: string;
  tagList: string[];
};

const Record: React.FC<TRecordPageProps> = ({ dates, view }) => {
  const year = Math.floor(dates / 10000);
  const month = Math.floor((dates % 10000) / 100);
  const date = dates % 100;
  const [postDate, setPostDate] = useState<TPostDate[]>();

  useEffect(() => {
    axios
      .get('http://3.34.55.111:8080/posts/date/1/', {
        params: { yy: year, mm: month, dd: date },
      })
      .then(res => {
        setPostDate(res.data.result.postTimeContentDTOList);
      })
      .catch(error => {
        console.error(error);
      });
  }, [year, month, date]);

  const formattedDate = `${year.toString().padStart(4, '0')}년 ${month
    .toString()
    .padStart(2, '0')}월 ${date.toString().padStart(2, '0')}일`;

  return (
    <PageContainer>
      <LogoHeader>나의 기록</LogoHeader>
      <DateSection>{formattedDate}</DateSection>
      {view === true ? (
        postDate?.map((record, index) => (
          <RecordCard
            navigateTo={'/'}
            key={index}
            title={record.title}
            content={record.content}
            date={record.createdAt}
            tags={record.tagList}
          />
        ))
      ) : (
        <FalseDiv>오늘 작성된 기록이 없습니다.</FalseDiv>
      )}
    </PageContainer>
  );
};

export default Record;
