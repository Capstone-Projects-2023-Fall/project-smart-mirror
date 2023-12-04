import React, {useEffect, useState} from "react";
import { User } from "@supabase/auth-helpers-nextjs";
import { supabase } from "~/lib/supabase-client";
type Props = {
  user: User | null;
};


export default function Home({ user }: Props) {
  const [userData, setUserData]: any = useState([]);
  const [curTime, setCurTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  const [prefTime, setPrefTime] = useState("en-US");
  
  useEffect( () => {
    getData();
  }, [])

  async function getData() {
    const {data, error} = await supabase
    .from("profiles")
    .select()
    .eq("id", user?.id)
    if (error !== null) {
      console.log(error);
    }
    console.log("Here is the data:");
    console.log(data);
    setUserData(data);

    setIsLoading(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (userData[0].preferred_time.includes("24")) {
        setPrefTime('en-GB');
        console.log(prefTime);
      }
    }

  }, [isLoading])
  


  // if (userData[0].preferred_date.toUpperCase().includes("YYYY-")) {
  //   prefDate = ""
  // }

  if (isLoading) 
    return <div> Loading Page...</div>;



  return <section className="my-8 font-bold" style={{paddingTop:"3rem"}}>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
      <h2>
        {userData[0].username}'s Home Page
      </h2> &nbsp;
      <h2>
        {curTime.toLocaleTimeString(prefTime)}
      </h2>
    </div>
    <h3 style={{paddingTop:"3rem", paddingBottom:"3rem"}}>
    Current Sub-Profile
    </h3> 
    <h3 style={{paddingTop:"3rem", paddingBottom:"3rem"}}>
    Active Modules
    </h3>
  </section>
    
}
