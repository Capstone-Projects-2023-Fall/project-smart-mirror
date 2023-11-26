import React, { useState, useEffect } from 'react';
import './ToggleSwitch.css'; // Ensure this is the path to your toggle switch CSS

const ModuleView: React.FC = () => {
  const [isWidgetVisible, setIsWidgetVisible] = useState<boolean>(false);

  // Replace 'user_id_here' with the actual user ID obtained from the user's session
  const userId = 'user_id_here';

  // Function to fetch the current widget visibility state from the server
  const fetchWidgetVisibility = async () => {
    try {
      const response = await fetch(`/api/widget?user_id=${userId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setIsWidgetVisible(data.isWidgetVisible); // Assuming the response contains the visibility state
      console.log('Fetched widget visibility:', data.isWidgetVisible);
    } catch (error) {
      console.error('There was an error fetching the widget visibility:', error);
    }
  };

  // Call the fetchWidgetVisibility function when the component mounts
  useEffect(() => {
    fetchWidgetVisibility();
  }, []);

  // Function to handle the visibility toggle for Flask
  const toggleWidgetVisibilityForFlask = async (newState) => {
    try {
      const response = await fetch('http://localhost:1023/toggle-widget', {
        method: 'POST',
        body: JSON.stringify({ isWidgetVisible: newState }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Widget visibility toggled (Flask):', data);
    } catch (error) {
      console.error('Flask API error:', error);
    }
  };

  // Function to handle the visibility toggle for Supabase via Next.js API
  const toggleWidgetVisibilityForSupabase = async (newState) => {
    try {
      const response = await fetch('/api/widget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: userId,
          field: 'downloaded_modules',
          value: JSON.stringify({
            user_settings: {
              downloaded_modules: [
                {
                  module_name: "Weather",
                  active: newState,
                  preferences: {
                    state: "daily",
                  },
                },
              ],
            }
          }),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Widget visibility toggled (Supabase):', data);
    } catch (error) {
      console.error('Supabase API error:', error);
    }
  };

  // Combined function to handle both Flask and Supabase actions
  const toggleWidgetVisibility = async () => {
    const newState = !isWidgetVisible;

    // Toggle visibility using Flask
    await toggleWidgetVisibilityForFlask(newState);
    
    // Then toggle visibility using Supabase
    await toggleWidgetVisibilityForSupabase(newState);

    // Finally, update the local state to reflect the new visibility state
    setIsWidgetVisible(newState);
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
