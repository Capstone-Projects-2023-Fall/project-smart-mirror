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

  export default function Fitbit({ user }: Props) {
    const [prefDate, setPrefDate] = useState<string | null>(null);

  return (
    <>
      <h2 className="fitbit-header">Fitbit</h2>
      <button onClick={async () => {
        const codeVerifier = generateCodeVerifier();
        console.log('Code Verifier:', codeVerifier);
    
        // Generate code challenge
        const codeChallenge = generateCodeChallenge(codeVerifier);
        console.log('Code Challenge:', codeChallenge);
        window.location.replace('https://www.fitbit.com/oauth2/authorize?client_id=23RKLS&response_type=code&code_challenge=3J5FPfgwtx6aj2GFL10KOEqpyhpOWDgmI0ZTkobhrAQ&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep%20social%20temperature%20weight');
        /*
        try {  
            const response = await fetch("https://www.fitbit.com/oauth2/authorize?client_id=23RKLS&response_type=code&code_challenge=3J5FPfgwtx6aj2GFL10KOEqpyhpOWDgmI0ZTkobhrAQ&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep%20social%20temperature%20weight");
    
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            
          } catch (error) {
            console.log(error)
        }
      */
      }
        }>Click to authorize fitbit2</button>

    </>
  );
}
