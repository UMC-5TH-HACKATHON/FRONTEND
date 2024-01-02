import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BtnArrowSmall } from '../../../images/btn_arrow_small.svg';
import { ReactComponent as RecordOff } from '../../../images/record_off.svg';
import { ReactComponent as RecordOn } from '../../../images/record_on.svg';
import { ReactComponent as RecordOnClick } from '../../../images/record_on_click.svg';
import { ReactComponent as RecordOffClick } from '../../../images/record_off_click.svg';
import axios from 'axios';

const Calendar: React.FC<{
  setDates: React.Dispatch<React.SetStateAction<number>>;
  setView: React.Dispatch<React.SetStateAction<string | boolean>>;
}> = ({ setDates, setView }) => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [click, setClick] = useState<string | number>(today.getDate());
  const [tf, setTF] = useState([]);

  useEffect(() => {
    axios
      .get('http://3.34.55.111:8080/users', {
        params: { mm: month, yy: year },
        headers: {
          memberId: 1,
        },
      })
      .then(res => {
        setTF(res.data.result);
      })
      .catch(error => {
        console.error(error);
      });
  }, [month, year]);

  useEffect(() => {
    const initialDate = year * 10000 + month * 100 + today.getDate();
    setDates(initialDate);
  }, [year, month, setDates]);

  const Date12 = [
    { date: '', img: '' },
    { date: '', img: '' },
    { date: '', img: '' },
    { date: '', img: '' },
    { date: '', img: '' },
    { date: 1, img: tf[0] },
    { date: 2, img: tf[1] },
    { date: 3, img: tf[2] },
    { date: 4, img: tf[3] },
    { date: 5, img: tf[4] },
    { date: 6, img: tf[5] },
    { date: 7, img: tf[6] },
    { date: 8, img: tf[7] },
    { date: 9, img: tf[8] },
    { date: 10, img: tf[9] },
    { date: 11, img: tf[10] },
    { date: 12, img: tf[11] },
    { date: 13, img: tf[12] },
    { date: 14, img: tf[13] },
    { date: 15, img: tf[14] },
    { date: 16, img: tf[15] },
    { date: 17, img: tf[16] },
    { date: 18, img: tf[17] },
    { date: 19, img: tf[18] },
    { date: 20, img: tf[19] },
    { date: 21, img: tf[20] },
    { date: 22, img: tf[21] },
    { date: 23, img: tf[22] },
    { date: 24, img: tf[23] },
    { date: 25, img: tf[24] },
    { date: 26, img: tf[25] },
    { date: 27, img: tf[26] },
    { date: 28, img: tf[27] },
    { date: 29, img: tf[28] },
    { date: 30, img: tf[29] },
    { date: 31, img: tf[30] },
  ];

  const Date1 = [
    { date: '', img: '' },
    { date: 1, img: tf[0] },
    { date: 2, img: tf[1] },
    { date: 3, img: tf[2] },
    { date: 4, img: tf[3] },
    { date: 5, img: tf[4] },
    { date: 6, img: tf[5] },
    { date: 7, img: tf[6] },
    { date: 8, img: tf[7] },
    { date: 9, img: tf[8] },
    { date: 10, img: tf[9] },
    { date: 11, img: tf[10] },
    { date: 12, img: tf[11] },
    { date: 13, img: tf[12] },
    { date: 14, img: tf[13] },
    { date: 15, img: tf[14] },
    { date: 16, img: tf[15] },
    { date: 17, img: tf[16] },
    { date: 18, img: tf[17] },
    { date: 19, img: tf[18] },
    { date: 20, img: tf[19] },
    { date: 21, img: tf[20] },
    { date: 22, img: tf[21] },
    { date: 23, img: tf[22] },
    { date: 24, img: tf[23] },
    { date: 25, img: tf[24] },
    { date: 26, img: tf[25] },
    { date: 27, img: tf[26] },
    { date: 28, img: tf[27] },
    { date: 29, img: tf[28] },
    { date: 30, img: tf[29] },
    { date: 31, img: tf[30] },
  ];

  const clickDate = (date: string | number, img: string) => {
    if (typeof date === 'number') {
      setClick(date);
      console.log(img);
      setDates(
        Number(
          year.toString().padStart(4, '0') +
            month.toString().padStart(2, '0') +
            date.toString().padStart(2, '0'),
        ),
      );
      setView(img);
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
                  <DateText onClick={() => clickDate(item.date, item.img)}>
                    {item.date}
                  </DateText>
                  <DateImg onClick={() => clickDate(item.date, item.img)}>
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
                  <DateText onClick={() => clickDate(item.date, item.img)}>
                    {item.date}
                  </DateText>
                  <DateImg onClick={() => clickDate(item.date, item.img)}>
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
