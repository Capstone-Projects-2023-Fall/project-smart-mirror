import { useState } from 'react';
import { Switch } from '@radix-ui/react-switch';
import { supabase } from "@/app/utils/supabase-client";

export default function SettingsPage() {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [trackingEnabled, setTrackingEnabled] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
/*For toggle check*/
  const LocationToggle = (checked) => setLocationEnabled(checked);
  const TrackingToggle = (checked) => setTrackingEnabled(checked);
  const AnalyticsToggle = (checked) => setAnalyticsEnabled(checked);
/*For location*/
const [toggleLocationSharing, setToggleLocationSharing] = useState(false)
const handleLocationToggle = async (checked) => {
  setLocationEnabled(checked); // Update the switch's state
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  
  // Check if the user data and ID are defined
  if (userError || !user || !user.id) {
    console.error(userError || 'User not found or user ID is undefined.');
    setToggleLocationSharing(false);
    return;
  }

  // If the toggle is turned on, get and update the location
  if (checked) {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const loc = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      
      const { error } = await supabase
        .from("profiles")
        .update({ location: loc })
        .eq("id", user.id);

      if (error) {
        console.error(error);
        setToggleLocationSharing(false); // Revert the switch to off if there's an error
      }
    }, (error) => {
      console.error(error.message);
      setToggleLocationSharing(false); // Revert the switch to off if geolocation fails
    }, {
      enableHighAccuracy: true,
    });
  } else {
    // If the toggle is turned off, remove the location
    const { error } = await supabase
      .from("profiles")
      .update({ location: null }) // Set location to null or an empty object
      .eq("id", user.id);

    if (error) {
      console.error(error);
    }
  }
};

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
                onCheckedChange={TrackingToggle}
                className="bg-skin-button-muted relative inline-flex items-center h-6 rounded-full w-11"
              >
                <span className={`block w-4 h-4 bg-skin-button-accent rounded-full shadow-lg transform transition-transform duration-200 ${trackingEnabled ? 'translate-x-6' : 'translate-x-1'}`}></span>
              </Switch>
            </li>
            <li className="flex items-center justify-between">
              Analytics
              <Switch
                checked={analyticsEnabled}
                onCheckedChange={AnalyticsToggle}
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
              {/*log */}
            </li>
            <li className="flex items-center justify-between mb-1">
              Change password
              {/* log */}
            </li>
            <li className="flex items-center justify-between mb-1">
              Change email
              {/*log */}
            </li>
            <li className="flex items-center justify-between">
              Change birthday
              {/* log */}
            </li>
            <li className="flex items-center justify-between">
              Change gender
              {/* log */}
            </li>
          </ul>
        </li>
        
        {/* ... other settings items ... */}
      </ul>
    </div>
  );
}