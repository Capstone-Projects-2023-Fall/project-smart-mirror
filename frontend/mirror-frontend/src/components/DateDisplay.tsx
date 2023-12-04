import React, { useState, useEffect } from 'react';

const DateDisplay: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options = { month: 'long', day: 'numeric' };
      const dateString = now.toLocaleDateString(undefined, options);
      setCurrentDate(dateString);
    };

    updateDate();

    const intervalId = setInterval(updateDate, 86400000); 

    return () => clearInterval(intervalId);
  }, []);

  return <div className="date">{currentDate}</div>;
};

export default DateDisplay;
