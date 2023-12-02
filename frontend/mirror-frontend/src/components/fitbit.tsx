import React, { useState, useEffect } from 'react';

const FitbitDataComponent = () => {
  const [fitbitData, setFitbitData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Replace 'YOUR_CLIENT_ID' and 'YOUR_CLIENT_SECRET' with your Fitbit application credentials
      const clientId = process.env.client_id;
      const clientSecret = process.env.client_secret;
      const authURL = process.env.auth_url;

      try {
        // Step 1: Get access token (replace 'YOUR_AUTH_CODE' with the actual authorization code)
        const authResponse = await fetch('https://api.fitbit.com/oauth2/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: 'YOUR_AUTH_CODE',
            redirect_uri: 'YOUR_REDIRECT_URI',
          }),
        });
        
        const authData = await authResponse.json();
        const accessToken = authData.access_token;

        // Step 2: Fetch Fitbit data using the access token
        const fitbitResponse = await fetch('https://api.fitbit.com/2/user/-/profile.json', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const fitbitData = await fitbitResponse.json();
        setFitbitData(fitbitData);
      } catch (error) {
        console.error('Error fetching Fitbit data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const whiteTextStyle = {
    color: 'white',
    fontSize: '24px', // Adjust font size as needed
    padding: '10px', // Adjust padding as needed
  };

  return (
    <div style={whiteTextStyle}>
      <h2>Fitbit Data:</h2>
      {fitbitData ? (
        <pre>{JSON.stringify(fitbitData, null, 2)}</pre>
      ) : (
        <p>Loading Fitbit data...</p>
      )}
    </div>
  );
};

export default FitbitDataComponent;