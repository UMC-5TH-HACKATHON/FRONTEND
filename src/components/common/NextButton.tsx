import React from 'react';
import styled from 'styled-components';

type TNextButtonProps = {
  text: string;
  disabled?: boolean;
};

const NextButton: React.FC<
  TNextButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ text, ...props }) => {
  return <Button {...props}>{text}</Button>;
};

export default NextButton;

const Button = styled.button`
  max-width: 354px;
  height: 53px;
  color: #fff;
  background-color: #358fff;
  border-radius: 10px;
  border: none;
  font: var(--Pretendard-18M);

  &:disabled {
    color: #bec4c6;
    background-color: #f5f6fa;
  }
`;
