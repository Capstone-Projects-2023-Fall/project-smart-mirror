import React, { useState } from 'react';
import TemperatureDisplay from './weather'; // Ensure TemperatureDisplay is exported correctly


const UI = () => {
    const [view, setView] = useState('');
  
    return (
      <div>
        <button className="black-button" onClick={() => setView('weather')}>Weather</button>
        <button className="black-button" onClick={() => setView('calendar')}>Calendar</button>
  
        {view === 'weather' && <TemperatureDisplay />}
        {/* view === 'calendar' && <CalendarComponent /> */}
      </div>
    );
  };
  
  export default UI;
  
