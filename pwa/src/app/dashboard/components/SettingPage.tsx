import { useState } from 'react';
import { Switch } from '@radix-ui/react-switch';

export default function SettingsPage() {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [trackingEnabled, setTrackingEnabled] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const handleLocationToggle = (checked) => setLocationEnabled(checked);
  const handleTrackingToggle = (checked) => setTrackingEnabled(checked);
  const handleAnalyticsToggle = (checked) => setAnalyticsEnabled(checked);

  return (
    <div className="text-skin-base">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <ul className="list-inside space-y-4">
        <li>
          <h3 className="font-semibold mb-2">Data & Privacy</h3>
          <ul className="list-disc pl-5">
            <li className="flex items-center justify-between mb-1">
              Location
              <Switch
                checked={locationEnabled}
                onCheckedChange={handleLocationToggle}
                className="bg-skin-button-muted relative inline-flex items-center h-6 rounded-full w-11"
              >
                <span className={`block w-4 h-4 bg-skin-button-accent rounded-full shadow-lg transform transition-transform duration-200 ${locationEnabled ? 'translate-x-6' : 'translate-x-1'}`}></span>
              </Switch>
            </li>
            <li className="flex items-center justify-between mb-1">
              Tracking
              <Switch
                checked={trackingEnabled}
                onCheckedChange={handleTrackingToggle}
                className="bg-skin-button-muted relative inline-flex items-center h-6 rounded-full w-11"
              >
                <span className={`block w-4 h-4 bg-skin-button-accent rounded-full shadow-lg transform transition-transform duration-200 ${trackingEnabled ? 'translate-x-6' : 'translate-x-1'}`}></span>
              </Switch>
            </li>
            <li className="flex items-center justify-between">
              Analytics
              <Switch
                checked={analyticsEnabled}
                onCheckedChange={handleAnalyticsToggle}
                className="bg-skin-button-muted relative inline-flex items-center h-6 rounded-full w-11"
              >
                <span className={`block w-4 h-4 bg-skin-button-accent rounded-full shadow-lg transform transition-transform duration-200 ${analyticsEnabled ? 'translate-x-6' : 'translate-x-1'}`}></span>
              </Switch>
            </li>
          </ul>
        </li>
        {/* ... other settings items ... */}
        <li>
          <h3 className="font-semibold mb-2">Account</h3>
          <ul className="list-disc pl-5">
            <li className="flex items-center justify-between mb-1">
              Change username
              {/* Here you would handle the username changing logic */}
            </li>
            <li className="flex items-center justify-between mb-1">
              Change password
              {/* Here you would handle the password changing logic */}
            </li>
            <li className="flex items-center justify-between mb-1">
              Change email
              {/* Here you would handle the email changing logic */}
            </li>
            <li className="flex items-center justify-between">
              Change birthday
              {/* Here you would handle the birthday changing logic */}
            </li>
            <li className="flex items-center justify-between">
              Change gender
              {/* Here you would handle the gender changing logic */}
            </li>
          </ul>
        </li>
        
        {/* ... other settings items ... */}
      </ul>
    </div>
  );
}