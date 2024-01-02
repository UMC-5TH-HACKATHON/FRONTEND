import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Onboard1Img } from '../../images/onboarding01.svg';
import { useNavigate } from 'react-router';

const OnBoarding1: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => navigate('/onBoard2')} />
      <Onboard1Img />
    </Container>
  );
};

export default OnBoarding1;

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  margin-top: 800px;
  margin-left: 360px;
  padding: 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;
