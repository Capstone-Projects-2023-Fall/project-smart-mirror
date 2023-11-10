import React from 'react';
import './App.css';
import TemperatureDisplay from './weather'; 
import UI from './UI';

const App: React.FC = () => {
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Mirror</h1>
        {/* Render TemperatureDisplay without passing props */}
        <UI />
      </header>
    </div>
  );
};

export default App;
