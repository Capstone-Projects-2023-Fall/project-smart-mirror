import React from 'react';
import TemperatureDisplay from './weather';
import CalendarUI from './calendar';
import FitbitDataComponent from './fitbit'
import NewsComponent from './news';
import './App.css'; // Ensure this is the path to your CSS file
/*
 <div className="news-box">
      <NewsComponent/>
      </div>
*/
const UI = () => {
  return (
    <div className="ui-container2">
    <div className="ui-container">
      <div className="weather-box">
        <TemperatureDisplay />
      </div>
      <div className="calendar-box">
        <CalendarUI />
      </div>
      <div className="fitbit-box">
      <FitbitDataComponent/>
      </div>
    </div>
    
   
      
    </div>
  );
};

export default UI;