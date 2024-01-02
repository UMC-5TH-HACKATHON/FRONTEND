import React from 'react';
import styled from 'styled-components';
import {ReactComponent as DetailButtonSVG} from '../../images/detailbutton.svg'


type Props = {
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
        <DetailButton aria-label="자세히">
          <DetailButtonSVG />
        </DetailButton>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardDate>{date}</CardDate>
      <CardFooter>
        {tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </CardFooter>
    </Card>
  );
};

export default RecordCard;

const Card = styled.div`
  border-radius: 10px;
  padding: 16px;
  background-color: #F5F6FA;
  width: 354px;
  height: 165px;
  margin-top: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #8A8585;
`;

const CardTitle = styled.div`
   font: var(--Pretendard-18/m);
`;

const DetailButton = styled.button`
  margin-left: 10px;
  width: 60px;
  height: 50px;
  background: none;
  border: none;
  padding: 0;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left; 
  color: #333333; 
  margin-bottom: 8px;
  font-size: 14px;
  font: var(--Pretendard-14R);
`;

const CardDate = styled.div`
  display: flex;
  color: #8A8585;
  font-size: 12px;
  font: var(--Pretendard-12M);
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
  margin-top: 10px;
  font: var(--Pretendard-12R);
`;