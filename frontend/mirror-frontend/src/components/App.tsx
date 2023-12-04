import React, { useState, useEffect } from 'react';
import TemperatureDisplay from './weather';
import CalendarUI from './calendar';
import FitbitDataComponent from './fitbit';
import NewsComponent from './news';
import Clock from "./clock";
import './App.css';
import './clock.css';

const UI: React.FC = () => {
  // Assume that the initial state is set to what is saved in the database
  const [widgetVisibility, setWidgetVisibility] = useState({
    Weather: false,
    Calendar: false,
    News: false,
    Fitbit: false
  });

  useEffect(() => {
    // Define a function that will be called to fetch widget visibility
    const fetchWidgetVisibility = async () => {
      try {
        // Fetch the latest widget visibility state from your API
        const response = await fetch('http://localhost:1023/api/widget-visibility');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Update the state if the fetched data has the 'downloaded_modules' key
        if (data && data.downloaded_modules) {
          setWidgetVisibility(data.downloaded_modules);
        }
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };

    // Call the fetch function when the component mounts
    fetchWidgetVisibility();

    // Optionally, set up a polling mechanism to fetch the latest visibility
    const intervalId = setInterval(fetchWidgetVisibility, 5000); // Poll every 5 seconds

    // Clean up the interval on component unmount
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
