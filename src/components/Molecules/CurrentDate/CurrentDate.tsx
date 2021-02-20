import React, { FC, useState, useRef, useEffect } from 'react';
import moment, { Moment } from 'moment';

interface Props {
  timezone: number;
}

export const CurrentDate: FC<Props> = ({ timezone }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const dateTimeRef = useRef<Moment>();

  const setDateTime = (dateObj: Moment): void => {
    setDate(dateObj.format('dddd, MMMM Do YYYY'));
    setTime(dateObj.format('hh:mm:ss a'));

    dateTimeRef.current = dateObj;
  };

  useEffect(() => {
    const utcTime = moment.utc().add(timezone, 's');
    setDateTime(utcTime);

    const dateTimer = setInterval(() => {
      if (timezone) {
        const dateTimeObj = moment(dateTimeRef.current).add(1, 's');
        setDateTime(dateTimeObj);
      }
    }, 1000);

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
