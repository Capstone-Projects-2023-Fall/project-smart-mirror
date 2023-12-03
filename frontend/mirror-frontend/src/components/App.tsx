import React, { useState, useEffect } from 'react';
import TemperatureDisplay from './weather';
import CalendarUI from './calendar';
import FitbitDataComponent from './fitbit'
import NewsComponent from './news';
import './App.css'; // Ensure this is the path to your CSS file

const UI: React.FC = () => {
  const [isWeatherVisible, setIsWeatherVisible] = useState<boolean>(true);

  useEffect(() => {
    const fetchWidgetVisibility = async () => {
      try {
        const response = await fetch('http://localhost:1023/toggle-widget');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setIsWeatherVisible(data.isWidgetVisible);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };

    fetchWidgetVisibility();
    const intervalId = setInterval(fetchWidgetVisibility, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="ui-container2">
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
    <div className="news-box">
      <NewsComponent/>
      </div>
    </div>
  );
};

export default UI;
