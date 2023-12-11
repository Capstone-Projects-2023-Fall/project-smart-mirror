import React, { useState } from "react";
import { User } from "@supabase/auth-helpers-nextjs";
import { supabase } from "@/app/utils/supabase-client";
import { motion } from "framer-motion";
import { useEffect } from 'react';
import crypto from 'crypto';
import base64url from "base64url";

type Props = {
    user: User | null;
  };
  
  const generateCodeVerifier = () => {
    const codeVerifier = base64url.encode(crypto.randomBytes(32));
    return codeVerifier;
  };
  
  const generateCodeChallenge = (codeVerifier: string) => {
    const codeChallenge = base64url.encode(crypto.createHash('sha256').update(codeVerifier).digest());
    return codeChallenge;
  };

  // Upsert data into supa db
  const upsertSupa = async (userId: string, table: string, data: Record<string, string>) => {
    if (userId && table && data) {
      const { error } = await supabase
          .from("fitbit")
          .upsert([{ id: userId, ...data }]);
          
          if (!error) {
            console.log("Upsert successful!");
        } else {
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


  // Send user to auth page, save verifier code in supabase: step 1 - DONE
  const authorizeUser = async (userId:string, codeVerifier:string, codeChallenge:string) => {
    const { error } = await supabase
          .from("fitbit")
          .upsert([{id: userId, code_verifier:codeVerifier}])
          if (error !== null) {
            console.log("Failed to store code verifier" + error);
          }
          else{
            console.log("Code Verifier stored");
          }
          
          //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
          var authorizationUrl = 'https://www.fitbit.com/oauth2/authorize?client_id=23RKLS&response_type=code&code_challenge=' + codeChallenge + '&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep%20social%20temperature%20weight';

          window.location.replace(authorizationUrl);     
  }

  // Get code verifier, parse auth code, get token: step 2 - TODI
  // If we get sent to this screen from home, automatically parse the url and store it
  // TODO get rid of sync buttons
  const getAccessToken = async (userId:string, clientId:string, clientSecret:string, codeParam:string, codeVerifier:string) => {
    //console.log(code)   
    if(!userId){
        console.log("Error: User is not signed in");
    }
    else if(codeVerifier && clientId && codeParam){
      let authResponse:any;
          // Get access token, refresh token, user_id, scope
          console.log(codeVerifier + "" + clientId + " " + codeParam)
          try{
              authResponse = await fetch('https://api.fitbit.com/oauth2/token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
              },
              body: new URLSearchParams({
                client_id: clientId,
                code: codeParam,
                code_verifier: codeVerifier,
                grant_type: 'authorization_code'
              }).toString(),
            });
          }
          catch (error){
            console.log("Error could not get tokens:" + error);
          }
            

            if (!authResponse.ok) {
              throw new Error(`Authentication failed with status: ${authResponse.status}`);
              console.log("error")
            }
            else{
              const authData = await authResponse.json();

              const accessToken = authData.access_token;
              const refreshToken = authData.refresh_token;
              const user_idd = authData.user_id;
    
              // Store tokens in supa
              const data = { access_token: accessToken, code_verifier: codeVerifier};
              upsertSupa(userId, 'fitbit', data);
    
              const data2 = { refresh_token: refreshToken, code_verifier: codeVerifier};
              upsertSupa(userId, 'fitbit', data2);
    
              const data3 = { fitbit_id: user_idd, code_verifier: codeVerifier};
              upsertSupa(userId, 'fitbit', data3);
    
            }
          
        
  
      }
  }

  export default function Fitbit({ user }: Props) {
    const [prefDate, setPrefDate] = useState<string | null>(null);
    useEffect(() => {
      const generateAndRedirect = async () => {
    
      };
  
      // Call the function when the component mounts
      generateAndRedirect();
    }, []);

  return (
    <>
      <h2 className="fitbit-header">Fitbit</h2>
      <button onClick={async () => {
        // Generate code verifier 
        const codeVerifier = generateCodeVerifier();
    
        // Generate code challenge
        const codeChallenge = generateCodeChallenge(codeVerifier);

        // get User id
        const userId = user?.id;
        if(userId){
            authorizeUser(userId, codeVerifier, codeChallenge);
          }
        }
        
        }>Click to authorize fitbit</button>


      <h2 className="fitbit-sync">Sync</h2>
      <button onClick={async () => {
        const authCode = new URLSearchParams(location.search).get("code");
        const userId = user?.id;

        if (authCode && userId) {
            let codeVerifier: any;
            const response = await getSuper(userId, 'code_verifier');
    
            if(response !== null){
                codeVerifier = response[0]?.code_verifier;
            }
            else{
                console.log("Error: cv is null");
            }

           if(authCode !== null){
            // TODO REMOVE HARD CODED BS
            const clientId = "23RKLS";
            const clientSecret = "2c3743a22c9be82c95f1b9a615e11580";
            getAccessToken(userId, clientId, clientSecret, authCode, codeVerifier);
           }
          
        }
}
  }>Click to sync fitbit</button>
    </>
    
  );
}