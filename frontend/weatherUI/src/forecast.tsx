import React from 'react';

const DailyForecast = ({ day, minTemp, maxTemp }) => (
  <div className="daily-forecast">
    <p className="day">{day}</p>
    <div className="temperatures">
      <p className="temperature min-temp">{minTemp}°F</p>
      <p className="temperature max-temp">{maxTemp}°F</p>
    </div>
  </div>
);

const WeeklyForecast = () => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Placeholder temperature data
  const tempData = {
    Mon: { min: 'Min --', max: 'Max --' },
    Tue: { min: 'Min --', max: 'Max --' },
    Wed: { min: 'Min --', max: 'Max --' },
    Thu: { min: 'Min --', max: 'Max --' },
    Fri: { min: 'Min --', max: 'Max --' },
    Sat: { min: 'Min --', max: 'Max --' },
    Sun: { min: 'Min --', max: 'Max --' },
  };

  return (
    <div className="weekly-forecast">
      {weekDays.map(day => (
        <DailyForecast 
          key={day} 
          day={day} 
          minTemp={tempData[day].min} 
          maxTemp={tempData[day].max} 
        />
      ))}
    </div>
  );
};

export default WeeklyForecast;