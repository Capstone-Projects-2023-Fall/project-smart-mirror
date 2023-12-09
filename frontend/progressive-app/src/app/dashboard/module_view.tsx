import React, { useState, useEffect, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion } from 'framer-motion';
import './toggleswitch.css';
import './box.css';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be defined');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ModuleView = () => {
  const [widgetVisibility, setWidgetVisibility] = useState({
    Weather: true,
    News: true,
    Calendar: true,
    Spotify: true 
  });
  const draggableAreaRef = useRef(null);
  const constraintsRef = useRef(null);
  const [constraints, setConstraints] = useState({ top: 0, right: 0, bottom: 0, left: 0 });

  const userId = '21380693-3ade-4951-82c0-1440aaf54297'; // Replace with the actual user ID from the user's session

  // Function to fetch the current widget visibility state from Supabase
  const fetchWidgetVisibility = async () => {
    const { data, error } = await supabase
      .from('profiles') 
      .select('downloaded_modules')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching widget visibility:', error);
    } else if (data) {
      setWidgetVisibility(data.downloaded_modules);
    }
  };

  // Function to handle the visibility toggle for each widget
  const toggleWidgetVisibility = async (widgetName) => {
    const newState = !widgetVisibility[widgetName];

    // Update the state locally for a responsive UI
    setWidgetVisibility(prevState => ({
      ...prevState,
      [widgetName]: newState
    }));

    // Prepare the updated visibility state to send to the backend
    const updatedVisibility = { ...widgetVisibility, [widgetName]: newState };

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ downloaded_modules: updatedVisibility })
        .eq('id', userId);

      if (error) {
        throw new Error(error.message);
      }
      console.log(`Visibility for ${widgetName} updated to: ${newState}`);
    } catch (error) {
      console.error(`Failed to update visibility for ${widgetName}: ${error}`);
      setWidgetVisibility(prevState => ({
        ...prevState,
        [widgetName]: !newState
      }));
    }
  };

  useEffect(() => {
    fetchWidgetVisibility();

    const updateConstraints = () => {
      if (draggableAreaRef.current) {
        const areaBounds = draggableAreaRef.current.getBoundingClientRect();
        // Subtract the size of the boxes from the draggable area's dimensions
        setConstraints({
          top: 0,
          right: areaBounds.width - 100, // Assuming each box is 100px wide
          bottom: areaBounds.height - 100, // Assuming each box is 100px tall
          left: 0,
        });
      }
    };
  
    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  return (
    <div className="module-view">
      {/* Toggle Widgets */}
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
  
      {/* Draggable Area */}
      <div className="draggable-area" ref={draggableAreaRef}>
  <div className="box-title">Position for Widget</div>
  {Object.keys(widgetVisibility).map(widgetName => (
    <motion.div 
      key={widgetName}
      drag
      dragConstraints={constraints}
      className="draggable-box"
    >
      {widgetName}
    </motion.div>
  ))}
</div>
    </div>
  );
        }
export default ModuleView;
