import React, { useState, useEffect } from 'react';
import TemperatureDisplay from './weather';
import CalendarUI from './calendar';
import FitbitDataComponent from './fitbit';
import NewsComponent from './news';
import Clock from "./clock";
import './App.css';
import './clock.css';

const UI: React.FC = () => {
  const [widgetVisibility, setWidgetVisibility] = useState({
    Weather: false,
    Calendar: false,
    News: false,
    Fitbit: false
  });

  useEffect(() => {
    const fetchWidgetVisibility = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/widget?user_id=21380693-3ade-4951-82c0-1440aaf54297');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result && result.length > 0 && result[0].downloaded_modules) {
          setWidgetVisibility(result[0].downloaded_modules);
        } else {
          console.error('No widget visibility data found');
        }
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };

    fetchWidgetVisibility();
    // You might not need this interval if your data doesn't change often
    const intervalId = setInterval(fetchWidgetVisibility, 5000);

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
        <div className="clock-box">
          <Clock />
        </div>
      </div>
      {widgetVisibility.News && (
        <div className="news-box">
          <NewsComponent />
        </div>
      )}
      {/* If you want to include Fitbit widget as well */}
      {widgetVisibility.Fitbit && (
        <div className="fitbit-box">
          <FitbitDataComponent />
        </div>
      )}
    </div>
  );
};

export default UI;
