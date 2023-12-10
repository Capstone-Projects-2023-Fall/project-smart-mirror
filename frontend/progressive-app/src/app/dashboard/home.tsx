import React from "react";
import Clock from "./_components/clock/clock";
import { initTokenAuth, getSuper } from "./_components/settings/fitbit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { User } from "@supabase/auth-helpers-nextjs";
import { useEffect } from 'react';

type Props = {
  user: User | null;
};

export default function Home({ user }: Props) {
  const notify = () => {
    toast.success("Success! Fitbit is now synced", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
      pauseOnFocusLoss: false,
      toastId: "authenticated"
    });
  }

  useEffect(() => {
    const generateAndRedirect = async () => {
      const authCode = new URLSearchParams(location.search).get("code");
      const userId = user?.id;
    
      if (authCode && userId) {
          let codeVerifier: any;
          const response = await getSuper(userId, 'code_verifier');
    
          if(response !== null){
              codeVerifier = response[0]?.code_verifier;
          }
          else{
              console.log("Error: User CV is null");
          }
    
         if(authCode !== null){
          console.log(userId + " "+ authCode+ " "+ codeVerifier)
          initTokenAuth(userId, authCode, codeVerifier);
          notify();
      }
    }
    };

    // Call the function when the component mounts
    generateAndRedirect();
  }, []);


  return (
    <>
      <Clock />
    </>
  );
}
