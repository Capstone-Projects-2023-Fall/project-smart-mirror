import React, { useState, useEffect } from 'react';
import TemperatureDisplay from './weather';
import CalendarUI from './calendar';
import FitbitDataComponent from './fitbit';
import NewsComponent from './news';
import './App.css';

const UI: React.FC = () => {
  const [widgetVisibility, setWidgetVisibility] = useState({
    Weather: true,
    Calendar: true,
    News: true,
    Fitbit: true
  });

  useEffect(() => {
    const fetchWidgetVisibility = async () => {
      try {
        const response = await fetch('http://localhost:1023/api/widget-visibility'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWidgetVisibility(prevVisibility => ({
          ...prevVisibility,
          ...data
        }));
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };

    fetchWidgetVisibility();
    const intervalId = setInterval(fetchWidgetVisibility, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="ui-container2">
      <div className="ui-container">
        {widgetVisibility.Weather && (
          <div className="weather-box">
            <TemperatureDisplay />
          </div>
        )}
        {widgetVisibility.Calendar && (
          <div className="calendar-box">
            <CalendarUI />
          </div>
        )}
      </div>
      {widgetVisibility.News && (
        <div className="news-box">
          <NewsComponent />
        </div>
      )}
      {/* {widgetVisibility.Fitbit && (
        <div className="fitbit-box">
          <FitbitDataComponent />
        </div>
      )} */}
    </div>
  );
};

export default UI;
