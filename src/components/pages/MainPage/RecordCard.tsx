import React from 'react';
import styled from 'styled-components';
import {ReactComponent as DetailButtonImage} from '../../../images/btn_card_detail.svg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #FFFFFF; 
  min-height: 100vh;
  border-radius: 22px;
`;

const LogoHeader = styled.h1`
  font-size: 26px;
  margin-top: 15px;
  margin-left: 26px;
`;

const DateSection = styled.section`
  font-size: 18px;
  color: #000000;
  margin-top: 17px;
  margin-left: 26px;
`;

const Card = styled.div`
  border-radius: 8px;
  padding: 16px;
  margin: 18px;
  border-radius: 10px;
  background-color: #F5F6FA;
  width: 354px;
  height: 165px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #8A8585; 
`;

const CardTitle = styled.div`
margin-right: auto;
`;

const DetailButton = styled(DetailButtonImage)`
  margin-left: 10px; // 버튼과 컨텐츠 사이의 여백 조절
  width: 60px; // 버튼의 너비 설정
  height: 50px; // 버튼의 높이 설정
`;

const CardContent = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left; 
  color: #333333; 
  margin-bottom: 8px;
  font-size: 14px;
`;


const CardDate = styled.div`
  display: flex;
  color: #8A8585;
  font-size: 12px;
`;

const CardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: #FFFFFF; 
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.85em;
  color: #000000; 
  margin-top: 20px;
`;

// Props Interface
interface Props {
  title: string;
  content: string;
  date: string;
  tags: string[];
}

const RecordCard: React.FC<Props> = ({ title, content, date, tags }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle> 
        <DetailButton aria-label="자세히 보기" />
        </CardHeader>
      <CardContent>
        {content}
      </CardContent>
      <CardDate>{date}</CardDate>
      <CardFooter>
        {tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </CardFooter>
    </Card>
  );
};

const RecordPage: React.FC = () => {
  const recordsData = [
    {
      title: '디자인',
      content: '오늘 해커톤에 참여했다. 첫 해커톤이라 긴장했는데, 어쩌고저쩌고.....',
      date: '2023.12.07.  18:37',
      tags: ['해커톤', '프로젝트', 'Web디자인', 'UXUI']
    },
    {
      title: '디자인',
      content: '오늘 해커톤에 참여했다. 첫 해커톤이라 긴장했는데, 어쩌고저쩌고.....',
      date: '2023-12-07 18:37',
      tags: ['해커톤', '프로젝트', 'Web디자인', 'UX/UI']
    },
    // 여기에 추가 데이터
  ];

  return (
    <PageContainer>
      <LogoHeader>나의 기록</LogoHeader>
      <DateSection>2023년 12월 7일</DateSection>
      {recordsData.map((record, index) => (
        <RecordCard key={index} {...record} />
      ))}
    </PageContainer>
  );
};



export default RecordPage;
