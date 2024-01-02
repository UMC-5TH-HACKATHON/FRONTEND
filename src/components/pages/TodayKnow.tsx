import React from 'react';
import styled from 'styled-components';
import { ReactComponent as TodayKnowImg } from '../../images/todayKnow.svg';
import BottomNav from '../common/BottomNav';
import { useNavigate } from 'react-router';

const TodayKnow: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Contain>
      <Button onClick={() => navigate('/')} />
      <TodayKnowImg />
      <BottomNav />
    </Contain>
  );
};
export default TodayKnow;

const Contain = styled.div``;

const Button = styled.button`
  position: absolute;
  cursor: pointer;
  margin-top: 65px;
  margin-left: 30px;
  padding: 10px;
  width: 0px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;
