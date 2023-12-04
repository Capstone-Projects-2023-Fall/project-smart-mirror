import React, { useState, useEffect } from 'react';
import './toggleswitch.css';

interface WidgetVisibility {
  Weather: boolean;
  News: boolean;
  Calendar: boolean;
}


const ModuleView: React.FC = () => {
  const [widgetVisibility, setWidgetVisibility] = useState<WidgetVisibility>({
    Weather: true,
    News: true,
    Calendar: true
  });

  const userId = '21380693-3ade-4951-82c0-1440aaf54297'; // Replace with the actual user ID from the user's session

  // Function to fetch the current widget visibility state from the server
  const fetchWidgetVisibility = async () => {
    try {
      const response = await fetch('http://localhost:1023/api/widget-visibility');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWidgetVisibility(data);
    } catch (error) {
      console.error('There was an error fetching the widget visibility:', error);
    }
  };

  useEffect(() => {
    fetchWidgetVisibility();
  }, []);

  // Function to handle the visibility toggle for each widget
  const toggleWidgetVisibility = async (widgetName : keyof WidgetVisibility) => {
    const newState = !widgetVisibility[widgetName];

    try {
      const response = await fetch('http://localhost:1023/api/toggle-widget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ widgetName, newVisibility: newState }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWidgetVisibility(prev => ({ ...prev, [widgetName]: data[widgetName] }));
    } catch (error) {
      console.error('Error toggling widget visibility:', error);
    }
  };

  return (
    <div className="module-view">
      {Object.keys(widgetVisibility).map(widgetName => (
        <div key={widgetName} className="toggle-switch-container">
          <span className="widget-name">{widgetName}</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={widgetVisibility[widgetName]}
              onChange={() => toggleWidgetVisibility(widgetName)}
              className="toggle-switch-checkbox"
            />
            <span className="toggle-switch-slider" />
          </label>
        </div>
      ))}
    </div>
  );
      }
export default ModuleView;
