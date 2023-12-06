import React, { useState, useEffect } from 'react';
import TemperatureDisplay from './weather';
import CalendarUI from './calendar';
import FitbitDataComponent from './fitbit';
import NewsComponent from './news';
import Clock from "./clock";
import GlobalStyle from './GlobalStyle'; // Import the GlobalStyle
import './App.css';
import './clock.css';

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
    <>
    <GlobalStyle />
      <div className="clock-box">
        <Clock />
      </div>
      {widgetVisibility.News && (
        <div className="news-box">
          <NewsComponent />
        </div>
      )}
      <div className="ui-container">
        {widgetVisibility.Weather && (
          <div className="weather-box">
            <TemperatureDisplay />
          </div>
        )}
        

      </div>
      {/* If you want to include Fitbit widget as well
      {widgetVisibility.Fitbit && (
        <div className="fitbit-box">
          <FitbitDataComponent />
        </div>
      )} */}
    </>
  );
};

export default UI;
