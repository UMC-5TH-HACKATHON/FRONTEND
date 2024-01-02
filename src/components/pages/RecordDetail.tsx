import React from 'react';
import styled from 'styled-components';
import { ReactComponent as RecordDetailImg } from '../../images/recordDetail.svg';
import { useNavigate } from 'react-router';

const RecordDetail: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => navigate('/record')} />
      <Button2 onClick={() => navigate('/record')} />
      <RecordDetailImg />
    </Container>
  );
};

export default RecordDetail;

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  margin-top: 65px;
  margin-left: 30px;
  padding: 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

const Button2 = styled.button`
  position: absolute;
  bottom: 0px;
  margin-bottom: 20px;
  width: 390px;
  height: 100px;
  padding: 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;
