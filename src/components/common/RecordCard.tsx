import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as DetailButtonSVG } from '../../images/detailbutton.svg';

type Props = {
  title: string;
  content: string;
  date: string;
  tags: string[];
  navigateTo: string;
};

const RecordCard: React.FC<Props> = ({
  title,
  content,
  date,
  tags,
  navigateTo,
}) => {
  const navigate = useNavigate();

  const handleDetailButtonClick = () => {
    navigate(navigateTo);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <DetailButton aria-label="자세히" onClick={handleDetailButtonClick}>
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
  background-color: #f5f6fa;
  width: 354px;
  height: 165px;
  margin-top: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #8a8585;
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
  height: 40px;
  overflow: hidden;
`;

const CardDate = styled.div`
  display: flex;
  color: #8a8585;
  font-size: 12px;
  font: var(--Pretendard-12M);
`;

const CardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.85em;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 20px;
  font: var(--Pretendard-12R);
`;
