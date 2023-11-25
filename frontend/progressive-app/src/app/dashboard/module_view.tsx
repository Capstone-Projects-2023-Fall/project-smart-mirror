import React, { useState, useEffect } from 'react';

const ModuleView: React.FC = () => {
  const [isWidgetOn, setIsWidgetOn] = useState<boolean>(
    localStorage.getItem('isWidgetOn') === 'true'
  );

  useEffect(() => {
    // Initialize the broadcast channel
    const bc = new BroadcastChannel('widget_channel');

    // Function to post messages
    const postMessage = (isOn: boolean) => {
      console.log('Posting message to broadcast channel:', isOn);
      bc.postMessage({ isWidgetOn: isOn });
    };

    // Post the initial state to the broadcast channel when the component mounts
    postMessage(isWidgetOn);

    // Listen to the 'storage' event on window
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'isWidgetOn') {
        const newValue = event.newValue === 'true';
        setIsWidgetOn(newValue);
        postMessage(newValue); // Use the postMessage function to update other tabs
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup function to remove the event listener and close the broadcast channel
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      bc.close(); // Close the broadcast channel when the component unmounts
    };
  }, []);

  const toggleWidget = () => {
    const newValue = !isWidgetOn;
    localStorage.setItem('isWidgetOn', String(newValue));
    setIsWidgetOn(newValue);
    // Use the existing broadcast channel, which is still open, to send the message
    const bc = new BroadcastChannel('widget_channel');
    bc.postMessage({ isWidgetOn: newValue });
    // Do not close the broadcast channel here; it's handled in the useEffect cleanup
  };

  return (
    <div>
      <label className="toggle-switch">
        <input type="checkbox" checked={isWidgetOn} onChange={toggleWidget} />
        <span className="switch-slider"></span>
      </label>
    </div>
  );
};

export default ModuleView;
