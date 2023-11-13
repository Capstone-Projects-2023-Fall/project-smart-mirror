import React from 'react';
import TemperatureDisplay from './weather';
import CalendarUI from './calendar';
import './App.css'; // Assuming you have a CSS file for styling

const UI = () => {
  return (
    <div className="ui-container">
      <div className="weather-box">
        <TemperatureDisplay />
      </div>
      <div className="calendar-box">
        <CalendarUI />
      </div>
    </div>
  );
};

export default UI;