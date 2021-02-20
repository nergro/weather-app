import React, { FC, useState, useRef, useEffect } from 'react';
// import moment, { Moment } from 'moment-timezone';
import moment, { Moment } from 'moment';

interface Props {
  timezone: number;
}

export const CurrentDate: FC<Props> = ({ timezone }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const dateTimeRef = useRef<Moment>();

  const setDateTime = (dateObj: Moment): void => {
    setDate(dateObj ? dateObj.format('dddd, MMMM Do YYYY') : '');
    setTime(dateObj ? dateObj.format('hh:mm:ss a') : '');

    dateTimeRef.current = dateObj;
  };

  useEffect(() => {
    const now = new Date(new Date().getTime() + timezone * 1000);
    // d.toISOString()

    // Date.now() + 1000 * timezone;
    setDateTime(moment(now));

    const dateTimer = setInterval(() => {
      if (timezone) {
        // const now = Date.now();
        const dateTimeObj = moment(dateTimeRef.current).add(1, 's');
        // console.log(dateTimeObj);
        setDateTime(dateTimeObj);
      }
    }, 1000);

    // increment timer by 1 sec
    return () => {
      clearInterval(dateTimer);
    };
  }, [timezone]);

  return date && time ? (
    <p className="currentDate">
      {date}
      <span> | </span>
      {time}
    </p>
  ) : null;
};
