import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase} from "~/lib/supabase-client";

export async function GET(request: Request){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get('id')
    const field = searchParams.get('field')
    
    if (id && field){
        //const client = new supabase;
        
        const { data, error } = await supabase
        .from("profiles")
        .select(field)
        .eq("id", id);
        if (data){
            return NextResponse.json({ message: data }, {status: 200})
        }
        else{
            return NextResponse.json({ message: "Error: Data not found" }, {status: 400})
        }
        
        
    }  

    return NextResponse.json({ message: "Error: Parameters not found" }, {status: 400})
}