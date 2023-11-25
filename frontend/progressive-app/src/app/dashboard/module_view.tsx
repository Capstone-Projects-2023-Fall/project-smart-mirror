import React, { useState, useEffect } from 'react';

const ModuleView: React.FC = () => {
  const [isWidgetOn, setIsWidgetOn] = useState<boolean>(
    localStorage.getItem('isWidgetOn') === 'true'
  );

  useEffect(() => {
    // Initialize the broadcast channel
    const bc = new BroadcastChannel('widget_channel');

    
    const postMessage = (isOn: boolean) => {
      console.log('Posting message to broadcast channel:', isOn);
      bc.postMessage({ isWidgetOn: isOn });
    };

    
    postMessage(isWidgetOn);

    
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'isWidgetOn') {
        const newValue = event.newValue === 'true';
        setIsWidgetOn(newValue);
        postMessage(newValue); 
      }
    };

    window.addEventListener('storage', handleStorageChange);

    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      bc.close(); 
    };
  }, []);

  const toggleWidget = () => {
    setIsWidgetOn((current) => {
      const newValue = !current;
      localStorage.setItem('isWidgetOn', newValue.toString());
      return newValue;
    });
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
