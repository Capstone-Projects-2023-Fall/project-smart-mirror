import React, { useState } from "react";
import { User } from "@supabase/auth-helpers-nextjs";
import { supabase } from "~/lib/supabase-client";
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

  const upsertSupa = async (userId: string, table: string, data: Record<string, string>) => {
    //console.log(userId + ' ' + table + ' ' + column + ' ' + value);
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


  // Send user to auth page, save verifier code in supabase: step 1
  const authorizeUser = async () => {
    
  }

  // Get code verifier, parse auth code, get token: step 2
  // If we get sent to this screen from home, automatically parse the url and store it
  // TODO get rid of sync button
  const getAccessToken = async () => {
    
  }

  // Store access, refresh, user_id in fitbit table: step 3
  const storeTokens = async () => {
    
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
        console.log('Code Verifier:', codeVerifier);
    
        // Generate code challenge
        const codeChallenge = generateCodeChallenge(codeVerifier);
        console.log('Code Challenge:', codeChallenge);


        // get User id
        const userId = user?.id;
        if(userId){
          const { error } = await supabase
          .from("fitbit")
          .upsert([{id: userId, code_verifier:codeVerifier}])
          if (error !== null) {
            console.log(error);
          }
          
          //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
          var authorizationUrl = 'https://www.fitbit.com/oauth2/authorize?client_id=23RKLS&response_type=code&code_challenge=' + codeChallenge + '&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep%20social%20temperature%20weight';

          window.location.replace(authorizationUrl);
          //window.location.replace('https://www.fitbit.com/oauth2/authorize?client_id=23RKLS&response_type=code&code_challenge={3J5FPfgwtx6aj2GFL10KOEqpyhpOWDgmI0ZTkobhrAQ}&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep%20social%20temperature%20weight');
          
          }
        }
        
        }>Click to authorize fitbit</button>


      <h2 className="fitbit-sync">Sync</h2>
      <button onClick={async () => {
        const codeParam = new URLSearchParams(location.search).get("code");
        const userId = user?.id;
        if (codeParam && userId) {
          
          const { data, error } = await supabase
            .from("fitbit")
            .select("code_verifier")
            .eq("id", userId);
    
            if (error !== null) {
              console.log(error);
            }
            else{
              const codeVerifier: string | undefined = data[0]?.code_verifier;
           
              if(codeVerifier){
      
                const clientId = "23RKLS";
                const clientSecret = "2c3743a22c9be82c95f1b9a615e11580";

                try {
                  console.log(JSON.stringify({
                    client_id: clientId,
                    code: codeParam,
                    code_verifier: codeVerifier,
                    grant_type: 'authorization_code' 
                  }));

                  // Get access token, refresh token, user_id, scope
                    const authResponse = await fetch('https://api.fitbit.com/oauth2/token', {
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
                  console.log("auth resp" + authResponse);
                  const authData = await authResponse.json();

                  const accessToken = authData.access_token;
                  const refreshToken = authData.refresh_token;
                  const user_idd = authData.user_id;

                  // Store tokens in supa
                  console.log("accessToken:! " + accessToken)
                  const data = { access_token: accessToken, code_verifier: codeVerifier};
                  upsertSupa(userId, 'fitbit', data);

                  const data2 = { refresh_token: refreshToken, code_verifier: codeVerifier};
                  upsertSupa(userId, 'fitbit', data2);

                  const data3 = { fitbit_id: user_idd, code_verifier: codeVerifier};
                  upsertSupa(userId, 'fitbit', data3);

                } catch (error) {
                  console.error('Error fetching Fitbit data:', error);
                }
          
              }
            }

          console.log(user)
          
        }
}
  }>Click to sync fitbit</button>
    </>
    
  );
}
