import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be defined');
}
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const ModuleView: React.FC = () => {
  const [widgetVisibility, setWidgetVisibility] = useState({
    Weather: true,
    News: true,
    Calendar: true
  });

  const userId = '21380693-3ade-4951-82c0-1440aaf54297'; // Replace with the actual user ID from the user's session

  // Function to fetch the current widget visibility state from Supabase
  const fetchWidgetVisibility = async () => {
    const { data, error } = await supabase
      .from('profiles') // Replace with your actual table name
      .select('downloaded_modules')
      .eq('id', userId) // Replace 'id' with the actual column name for user identification
      .single();

    if (error) {
      console.error('Error fetching widget visibility:', error);
    } else if (data) {
      setWidgetVisibility(data.downloaded_modules);
    }
  };

  // Function to handle the visibility toggle for each widget
  const toggleWidgetVisibility = async (widgetName : keyof WidgetVisibility) => {
    const newState = !widgetVisibility[widgetName];

    // Prepare the updated visibility state
    const updatedVisibility = { ...widgetVisibility, [widgetName]: newState };

    // Update the state locally for a responsive UI
    setWidgetVisibility(updatedVisibility);

    try {
      const { error } = await supabase
        .from('profiles') // Replace with your actual table name
        .update({ downloaded_modules: updatedVisibility })
        .eq('id', userId); // Replace 'id' with the actual column name for user identification

      if (error) {
        throw new Error(error.message);
      }
      // Log success and keep the updated local state as is
      console.log(`Visibility for ${widgetName} updated to: ${newState}`);
    } catch (error) {
      console.error(`Failed to update visibility for ${widgetName}: ${error}`);
      // Revert the state change for the specific widget if the update fails
      setWidgetVisibility(prevState => ({ ...prevState, [widgetName]: !newState }));
    }
  };

  // Effect to fetch widget visibility on component mount
  useEffect(() => {
    fetchWidgetVisibility();
  }, []);

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
};

export default ModuleView;
