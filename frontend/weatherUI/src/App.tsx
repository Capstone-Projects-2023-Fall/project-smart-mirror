import React from 'react';
import './App.css';
import TemperatureDisplay from './weather'; 

const App: React.FC = () => {
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather</h1>
        {/* Render TemperatureDisplay without passing props */}
        <TemperatureDisplay />
      </header>
    </div>
  );
};

export default App;
