import { useState } from 'react';
import { Switch } from '@radix-ui/react-switch';
import { supabase } from "@/app/utils/supabase-client";
import { Form } from '@radix-ui/react-form';

export default function SettingsPage() {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [trackingEnabled, setTrackingEnabled] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

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
/*----------------------------------------------------------------------------------------------*/
const handleUsernameChange = (event) => { /* ... */ };
const handlePasswordChange = (event) => { /* ... */ };
const handleEmailChange = (event) => { /* ... */ };
const handleBirthdayChange = (event) => { /* ... */ };
const handleGenderChange = (event) => { /* ... */ };



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
        {/* Account */}
        <li>
        <h3 className="text-xl font-semibold mb-4">Account</h3>
      <form className="space-y-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="username" className="mb-2 font-semibold">Change username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={handleUsernameChange}
            className="px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="mb-2 font-semibold">Change password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordChange}
            className="px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2 font-semibold">Change email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailChange}
            className="px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="birthday" className="mb-2 font-semibold">Change birthday:</label>
          <input
            id="birthday"
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            onBlur={handleBirthdayChange}
            className="px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender" className="mb-2 font-semibold">Change gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            onBlur={handleGenderChange}
            className="px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
            </div>
          </form>
        </li>       
        
        {/* ... other settings items ... */}
      </ul>
    </div>
  );
}