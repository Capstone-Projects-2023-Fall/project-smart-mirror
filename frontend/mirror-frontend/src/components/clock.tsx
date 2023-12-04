// Clock.tsx
import React, { useState, useEffect } from 'react';
import DateDisplay from './DateDisplay'; 

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [amPm, setAmPm] = useState<string>('AM');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours() % 12 || 12; // 12 ht format
      const minutes = now.getMinutes();
      const isPM = now.getHours() >= 12;

      setAmPm(isPM ? 'PM' : 'AM');

      const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const timeString = `${hours}:${minutesString} ${amPm}`;
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 500);

    return () => clearInterval(intervalId);
  }, [amPm]);

  return (
    <div className="clock-container">
      <div className="clock">{currentTime}
      <DateDisplay />

      </div>
    </div>
  );
};

export default Clock;
