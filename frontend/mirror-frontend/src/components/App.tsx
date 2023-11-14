import React from 'react';
import TemperatureDisplay from './weather';
import CalendarUI from './calendar';
import './App.css'; // Ensure this is the path to your CSS file
import Clock from './Clock';

const UI = () => {
  return (
    <div className="ui-container">
      <div className="weather-box">
        <TemperatureDisplay />
      </div>
      <div className="calendar-box">
        <CalendarUI />
      </div>
      <div className="ui-container">
      <div className="clock-box">
        <Clock title={"Clock"} />
      </div>
    </div>
    </div>
  );
};

export default UI;