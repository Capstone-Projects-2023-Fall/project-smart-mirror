import { request } from 'http';
import React, { useState, useEffect } from 'react';

const get = async (userId: string, table: string, data: Record<string, string>) => {
 
};

const getFitbitData = async (url: string, requestToken: string,) => {
  try {
    const authResponse = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + requestToken
      }
    });
  
    if (authResponse.ok) {
      const jsonResponse = await authResponse.json();
      console.log(jsonResponse);
      return jsonResponse; // If you want to return the JSON response
    } else {
      console.error('Error fetching Fitbit data:', authResponse.statusText);
    }
  } catch (error) {
    console.error('Error fetching Fitbit data:', error);
  }
  
};

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

const FitbitDataComponent = () => {
  const [fitbitData, setFitbitData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      const hard_coded_id = "b85ded12-06ba-4a7e-a14e-de104007ccd8"
      try{
        const authResponse = await fetch('http://localhost:3000/api/fitbit?id=b85ded12-06ba-4a7e-a14e-de104007ccd8&field=scope' );
        const responseData = await authResponse.json();
        //const message = responseData && responseData.message;
        //const singleValue = message && message.scope;

        //console.log('Single Value:', singleValue);

      }
      catch (error) {
        console.error('Error fetching Fitbit data:', error);
      }
      const bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM1JLTFMiLCJzdWIiOiJCUkpXWkgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcm94eSBycHJvIHJudXQgcnNsZSByYWN0IHJsb2MgcnJlcyByd2VpIHJociBydGVtIiwiZXhwIjoxNzAxNjc2MTg0LCJpYXQiOjE3MDE2NDczODR9.9XEiO5lDlc53JOXzpKuhxHFp_edqHTrvoL-g24OeebY";
      const stepsURL = "https://api.fitbit.com/1/user/-/activities/tracker/steps/date/2023-12-03/today.json";

      const stepsJson = await getFitbitData(stepsURL, bearerToken);
      
      const searchedValue = findValueByKey(stepsJson, 'value');
      //fitbitData = searchedValue;
      console.log(searchedValue);
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