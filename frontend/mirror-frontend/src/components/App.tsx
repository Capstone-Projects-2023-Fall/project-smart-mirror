import React from 'react';
import TemperatureDisplay from './weather';
import CalendarUI from './calendar';
import Clock from './clock'; // Import the Clock component, assumes Clock.js is in the same directory
import './App.css'; // Ensure this is the path to your CSS file
import './clock.css'; // Ensure this is the path to your Clock CSS file

const UI = () => {
  return (
    <div className="ui-container">
      <div className="weather-box">
        <TemperatureDisplay />
      </div>
      <div className="calendar-box">
        <CalendarUI />
      </div>
      <div className="clock-box">
        <Clock title="Local Time" />
      </div>
    </div>
  );
};

export default UI;

