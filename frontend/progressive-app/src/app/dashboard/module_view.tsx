import React, { useState } from 'react';
import './ToggleSwitch.css'; // Ensure this is the path to your toggle switch CSS

const ModuleView: React.FC = () => {
  const [isWidgetVisible, setIsWidgetVisible] = useState<boolean>(false);

  const toggleWidgetVisibility = async () => {
    try {
      const response = await fetch('http://localhost:4000/toggle-widget', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIsWidgetVisible(data.isWidgetVisible);
      console.log('Widget visibility toggled:', data.isWidgetVisible);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <div className="module-view">
      <div className="weather-label">Weather</div>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isWidgetVisible}
          onChange={toggleWidgetVisibility}
          className="toggle-switch-checkbox"
        />
        <span className="toggle-switch-slider" />
      </label>
    </div>
  );
};

export default ModuleView;
