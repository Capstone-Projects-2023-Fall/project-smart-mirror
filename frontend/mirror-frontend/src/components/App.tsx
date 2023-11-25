
import React, { useState, useEffect } from 'react';
import TemperatureDisplay from './weather'; 
import CalendarUI from './calendar'; 

const UI: React.FC = () => {

  const [isWeatherVisible, setIsWeatherVisible] = useState<boolean>(() => {
    return localStorage.getItem('isWidgetOn') === 'true';
  });

  useEffect(() => {
    
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'isWidgetOn') {
        setIsWeatherVisible(event.newValue === 'true');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="ui-container">
      {isWeatherVisible && (
        <div className="weather-box">
          <TemperatureDisplay />
        </div>
      )}
      <div className="calendar-box">
        <CalendarUI />
      </div>
    </div>
  );
};

export default UI;
