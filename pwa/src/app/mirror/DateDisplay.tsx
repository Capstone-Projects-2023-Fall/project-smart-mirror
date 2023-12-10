import React, { useState, useEffect } from 'react';

const DateDisplay: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options = { day: 'numeric', month: 'long' };
      const dateString = now.toLocaleDateString('en-GB', options);
      setCurrentDate(dateString);
    };

    updateDate();

    const intervalId = setInterval(updateDate, 86400000);

    return () => clearInterval(intervalId);
  }, []);
  return <div className="date text-white font-light mt-40 text-5xl">
    {currentDate}
  </div>
};

export default DateDisplay;
