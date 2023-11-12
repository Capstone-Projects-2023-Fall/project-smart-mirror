import React from 'react';
import TemperatureDisplay from './weather';
import CalendarUI from './calendar';
import './App.css'; // Ensure this is the path to your CSS file

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