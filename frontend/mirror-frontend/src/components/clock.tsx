import React, { useState, useEffect } from 'react';
import DateDisplay from './DateDisplay';

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [amPm, setAmPm] = useState<string>('AM');
  const [seconds, setSeconds] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours() % 12 || 12; // 12-hour format
      const minutes = now.getMinutes();
      const isPM = now.getHours() >= 12;

      setAmPm(isPM ? 'PM' : 'AM');

      const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const timeString = `${hours}:${minutesString}`;
      setCurrentTime(timeString);

      const secondsString = now.getSeconds() < 10 ? `0${now.getSeconds()}` : `${now.getSeconds()}`;
      setSeconds(secondsString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        {currentTime}
        <span className="seconds">{`${seconds}`}</span>
        <DateDisplay />
      </div>
    </div>
  );
};

export default Clock;
