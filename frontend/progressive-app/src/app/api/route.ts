import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase} from "~/lib/supabase-client";
import { NextResponse } from 'next/server';

export async function GET(request: Request, res: NextApiResponse) {
  //res.status(200);
  //return NextResponse.json({ message: 'working' })
  //if (req.method === 'GET') {
    // check for UUID existence
    //const uuid= "b42f99cb-a480-4238-a92a-58ad01801ef9"
    //const uuid = req.query.uuid;
    console.log(request.json());
    //const uuid = req.query
    return NextResponse.json({ message: 'hi' });
/*
    if (uuid){
        //const client = new supabase;
        
        const { data, error } = await supabase
        .from("profiles")
        .select()
        .eq("id", uuid);
        //res.status(200).json({ data })
        return NextResponse.json({ message: data })
        
        
    }  
    return NextResponse.json({ message: 'Internal server error' })
    
 // } 
 */
}
