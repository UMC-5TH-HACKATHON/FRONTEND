import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BtnArrowSmall } from '../../../images/btn_arrow_small.svg';
import { ReactComponent as RecordOff } from '../../../images/record_off.svg';
import { ReactComponent as RecordOn } from '../../../images/record_on.svg';
import { ReactComponent as RecordOnClick } from '../../../images/record_on_click.svg';
import { ReactComponent as RecordOffClick } from '../../../images/record_off_click.svg';

const Calendar: React.FC<{
  setDates: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setDates }) => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [click, setClick] = useState<string | number>(today.getDate());

  const Date12 = [
    { date: '', img: '' },
    { date: '', img: '' },
    { date: '', img: '' },
    { date: '', img: '' },
    { date: '', img: '' },
    { date: 1, img: true },
    { date: 2, img: true },
    { date: 3, img: true },
    { date: 4, img: true },
    { date: 5, img: false },
    { date: 6, img: true },
    { date: 7, img: true },
    { date: 8, img: true },
    { date: 9, img: false },
    { date: 10, img: true },
    { date: 11, img: true },
    { date: 12, img: true },
    { date: 13, img: false },
    { date: 14, img: true },
    { date: 15, img: true },
    { date: 16, img: true },
    { date: 17, img: true },
    { date: 18, img: true },
    { date: 19, img: true },
    { date: 20, img: false },
    { date: 21, img: true },
    { date: 22, img: true },
    { date: 23, img: true },
    { date: 24, img: false },
    { date: 25, img: true },
    { date: 26, img: true },
    { date: 27, img: true },
    { date: 28, img: false },
    { date: 29, img: false },
    { date: 30, img: true },
    { date: 31, img: true },
  ];

  const Date1 = [
    { date: '', img: '' },
    { date: 1, img: true },
    { date: 2, img: true },
    { date: 3, img: true },
    { date: 4, img: true },
    { date: 5, img: false },
    { date: 6, img: true },
    { date: 7, img: true },
    { date: 8, img: true },
    { date: 9, img: false },
    { date: 10, img: true },
    { date: 11, img: true },
    { date: 12, img: true },
    { date: 13, img: false },
    { date: 14, img: true },
    { date: 15, img: true },
    { date: 16, img: true },
    { date: 17, img: true },
    { date: 18, img: true },
    { date: 19, img: true },
    { date: 20, img: false },
    { date: 21, img: true },
    { date: 22, img: true },
    { date: 23, img: true },
    { date: 24, img: false },
    { date: 25, img: true },
    { date: 26, img: true },
    { date: 27, img: true },
    { date: 28, img: false },
    { date: 29, img: false },
    { date: 30, img: true },
    { date: 31, img: true },
  ];

  const clickDate = (date: string | number) => {
    if (typeof date === 'number') {
      setClick(date);
      setDates(Number(year.toString() + month.toString() + date.toString()));
    }
  };

  const click12 = () => {
    setYear(2023);
    setMonth(12);
  };

  const click1 = () => {
    setYear(2024);
    setMonth(1);
  };

  return (
    <CalendarContainer>
      <MonthContainer>
        <button onClick={click12}>
          <BtnArrowSmall transform="rotate(180)" />
        </button>
        <p>
          {year}년 {month}월
        </p>
        <button onClick={click1}>
          <BtnArrowSmall />
        </button>
      </MonthContainer>
      <DateContainer>
        {month === 12
          ? Date12.map((item, index) => {
              return (
                <Dates key={index}>
                  <DateText onClick={() => clickDate(item.date)}>
                    {item.date}
                  </DateText>
                  <DateImg onClick={() => clickDate(item.date)}>
                    {item.date === '' ? (
                      ''
                    ) : click === item.date && item.img ? (
                      <RecordOnClick />
                    ) : click === item.date && !item.img ? (
                      <RecordOffClick />
                    ) : item.img ? (
                      <RecordOn />
                    ) : (
                      <RecordOff />
                    )}
                  </DateImg>
                </Dates>
              );
            })
          : Date1.map((item, index) => {
              return (
                <Dates key={index}>
                  <DateText onClick={() => clickDate(item.date)}>
                    {item.date}
                  </DateText>
                  <DateImg onClick={() => clickDate(item.date)}>
                    {item.date === '' ? (
                      ''
                    ) : click === item.date && item.img ? (
                      <RecordOnClick />
                    ) : click === item.date && !item.img ? (
                      <RecordOffClick />
                    ) : item.img ? (
                      <RecordOn />
                    ) : (
                      <RecordOff />
                    )}
                  </DateImg>
                </Dates>
              );
            })}
      </DateContainer>
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  width: 390px;
`;

const MonthContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: transparent;
    border: none;
  }

  p {
    font: var(--Pretendard-18M);
  }
`;

const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0 32px;

  div {
    position: relative;
  }
`;

const Dates = styled.div`
  position: relative;
  height: 58px;
`;

const DateImg = styled.div`
  cursor: pointer;
  width: 44px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateText = styled.div`
  cursor: pointer;
  width: 38px;
  position: absolute;
  top: 35px;
  left: 3px;
  z-index: 10;
  color: #fff;
  font: var(--Pretendard-18M);
`;
