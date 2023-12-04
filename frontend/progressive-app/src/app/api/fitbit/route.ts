import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase} from "~/lib/supabase-client";

export async function GET(request: Request){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    const field = searchParams.get("field")
    
    if (id && field){
        
        const { data, error } = await supabase
        .from("fitbit")
        .select(field)
        .eq("id", id);
        if (data){
            const responseBody = { message: data };
            const customHeaders = {
                'Content-Type': 'application/json', // Adjust as needed
                'Access-Control-Allow-Origin': '*', // Allow any origin; you may want to restrict this based on your needs
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Specify the allowed HTTP methods
                'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept', // Specify the allowed headers
              };
            const customStatus = 200;

            return NextResponse.json(responseBody, {
                headers: customHeaders,
                status: customStatus,
              });
        }
        else{
            return NextResponse.json({ message: "Error: Data not found" }, {status: 400})
        }
        
        
    }  

    return NextResponse.json({ message: "Error: Parameters not found" }, {status: 400})
}
//(auth.uid() = id)
export async function POST(request: Request){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    const field = searchParams.get("field")
    const value = searchParams.get("value")
    
    if (id && field && value){
        const updateObject = {
            [field]: value,
          };

        const { data, error } = await supabase
        .from("fitbit")
        .update(updateObject)
        .eq('id', id)
        
        if (!error){
            return NextResponse.json({ message: "Success" }, {status: 200})
        }
        else{
            return NextResponse.json({ message: "Incorrect Params" }, {status: 400})
        }
        
        
    }  

    return NextResponse.json({ message: "Error: Parameters not found" }, {status: 400})
}