import { request } from 'http';
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://saqzgdinpsbxjdzhgfue.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcXpnZGlucHNieGpkemhnZnVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNjU2ODksImV4cCI6MjAxMzg0MTY4OX0.AWSNUfrFQFhZFwEOPkLYhzZV07k3VSA4Ox0gwJt2B2U';

//console.log("ENV!!!" + process.env.NEXT_PUBLIC_SUPABASE_URL);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be defined');
}
const supabase = createClient(supabaseUrl, supabaseAnonKey);


// Get data from a given fitbitURL and requestToken
// Refresh tokens if they have ran out
const getFitbitData = async (url: string, requestToken: string, refreshTokenId: string) => {
  try {
    const authResponse = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + requestToken
      }
    });
  
    if (authResponse.ok) {
      const jsonResponse = await authResponse.json();
      //console.log(jsonResponse);
      return jsonResponse; // If you want to return the JSON response
    }else if(authResponse.status == 401){
      console.log("its time to refresh the token!");
      return -1;
    }
     else {
      console.error('Error fetching Fitbit data:', authResponse.statusText);
    }
  } catch (error) {
    console.error('Error fetching Fitbit data:', error);
  }
  
};

// Get a value in Fitbit Table
const getFitBitValue = async (userId: string, value: string) => {
   // Construct the URL with parameters
   const url = new URL('http://localhost:3000/api/fitbit');
   url.searchParams.append('id', userId);
   url.searchParams.append('field', value);

   try {
     // Make the GET request
     const response = await fetch(url.toString());
 
     if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
     }
 
     // Parse and return the JSON response
     return await response.json();
   } catch (error) {
     console.error('Error fetching data:', error);
     throw error; // Re-throw the error for the calling code to handle
   }
}

// Update Data in fitbittable
// Refresh tokens if they have ran out
const PostFitbitData = async (url: string, requestToken: string,) => {
  try {
    const authResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + requestToken
      }
    });
  
    if (authResponse.ok) {
      const jsonResponse = await authResponse.json();
      return jsonResponse; // If you want to return the JSON response
    } else {
      console.error('Error fetching Fitbit data:', authResponse.statusText);
    }
  } catch (error) {
    console.error('Error fetching Fitbit data:', error);
  }
  
};

// find a value in a nested json object
function findValueByKey(obj: Record<string, any>, keyToFind: string): any | undefined {
  let result: any;

  function traverse(o: any) {
    for (const key in o) {
      if (key === keyToFind) {
        result = o[key];
        return;
      }
      
      if (typeof o[key] === 'object') {
        traverse(o[key]);
      }
    }
  }

  traverse(obj);
  return result;
}

// Exchange refreshToken for AccessToken if ours is expired
const refreshToken = async (clientId:string, clientSecret:string, refreshToken:string, userId:string) => {

  console.log("refreshing token: ");
  const authResponse = await fetch('https://api.fitbit.com/oauth2/token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
              },
              body: new URLSearchParams({
                refresh_token: refreshToken,
                grant_type: 'refresh_token'
              }).toString(),
            });

            if (!authResponse.ok) {
              console.log(authResponse.json());
              throw new Error(`Token refresh failed: ${authResponse.status}`);
            }
            else{

              console.log(authResponse.status);
              const authData = await authResponse.json();
              

              const accessToken2 = authData.access_token;
              const refreshToken2 = authData.refresh_token;

              const data = { access_token: accessToken2};
              upsertSupa(userId, 'fitbit', data);

              const data2 = { refresh_token: refreshToken2};
              upsertSupa(userId, 'fitbit', data2);
              
              return [accessToken2, refreshToken2];
            }
          
          
};

 // Upsert data into supa db
 const upsertSupa = async (userId: string, table: string, data: Record<string, string>) => {
  //console.log(userId + ' ' + table + ' ' + column + ' ' + value);
  if (userId && table && data) {
    const { error } = await supabase
        .from("fitbit")
        .upsert([{ id: userId, ...data }]);
        
        if (!error) {
          console.log("Upsert successful!");
      } else {
          console.log("data: " + data);
          console.error("Error during upsert:", error);
      }
  }
};


  // Get data from fitbit table
  const getSuper = async (userId: string, field: string) => {
    if(userId && field){
        const { data, error } = await supabase
        .from('fitbit')
        .select(field)
        .eq("id", userId);

        if (error !== null) {
        console.log("Data could not be retrieved from SUPA" + error);
        }
        else {
            console.log("Data retrieved from SUPA");
            return data;
        }
    }

    return null;
  }

const FitbitDataComponent = () => {
  const [fitbitData, setFitbitData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const userId = "8089166a-3db2-4b56-b1c7-ac3b188829a4"
      
      const clientId = "23RKLS";
      const clientSecret = "2c3743a22c9be82c95f1b9a615e11580";

      const aTokenResponse = await getSuper(userId, 'access_token');
      const rTokenResponse = await getSuper(userId, 'refresh_token');

      // fitbit API links
      const stepsURL = "https://api.fitbit.com/1/user/-/activities/tracker/steps/date/2023-12-03/today.json";
      const sleepLogURL = "https://api.fitbit.com/1/user/-/sleep/date/today.json";
      const badgesURL = "https://api.fitbit.com/1/user/-/badges.json";
      const goalsURL = "https://api.fitbit.com/1/user/-/activities/goals/daily.json";
      const sleepGoalsURL = "https://api.fitbit.com/1.2/user/-/sleep/goal.json";


      let aToken: any;
      let rToken: any;
      
      // Get activity data
      if(aTokenResponse && rTokenResponse){
        aToken = aTokenResponse[0]?.access_token;
        rToken = rTokenResponse[0]?.refresh_token;

        // Check if user has a fitbit connected
        if (typeof aToken === 'string' && typeof rToken === 'string') {
          // get activity data
          const stepsJson = await getFitbitData(stepsURL, aToken, rToken);
          console.log(stepsJson);

          // Refresh tokens if they are expired
          if (stepsJson === -1){
            //console.log("clientid" + clientId + "rToken" + "userId");
            const tokens = await refreshToken(clientId, clientSecret, rToken, userId).catch(error => {
              console.log(clientId + " " + clientSecret + " "+ rToken  + " " + userId);
              console.log(error);
            });
            if (tokens){
              aToken = tokens[0];
              rToken = tokens[1];
              console.log("a token:" + aToken);
              console.log("r token:" + rToken);
            }
          }

          // Get all fitbit data!
          const sleepJson = await getFitbitData(sleepLogURL, aToken, rToken);
          //const badgesJson = await getFitbitData(badgesURL, aToken, rToken);
          const goalsJson = await getFitbitData(goalsURL, aToken, rToken);
          const sleepGoalsJson = await getFitbitData(sleepGoalsURL, aToken, rToken);

          // sleep goal metrics are in hours
          const data = {
            steps: await findValueByKey(stepsJson, 'value'),
            stepGoal: await findValueByKey(goalsJson, 'steps'),
            calorieGoal: await findValueByKey(goalsJson, 'caloriesOut'),
            sleep: await findValueByKey(sleepJson, 'timeInBed')/60.0,
            sleepGoals: await findValueByKey(sleepGoalsJson, 'minDuration')/60.0
          };
          
          // Now, jsonObject contains all the values in a structured manner.
          console.log(data);
          setFitbitData(data);
        }
         
        
       
      }
      
    };


    fetchData();
  }, []);

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