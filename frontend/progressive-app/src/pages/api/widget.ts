
import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { supabase } from '~/lib/supabase-client'; 


const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
});


function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  if (req.method === 'GET') {
    // Handle GET request logic here
    const { user_id } = req.query; // or however you are passing the user ID
    if (user_id) {
      const { data, error } = await supabase
        .from('profiles')
        .select('downloaded_modules')
        .eq('id', user_id);

      if (error) {
        return res.status(400).json({ error });
      }
      return res.status(200).json({ data });
    } else {
      return res.status(400).json({ error: 'User ID is required' });
    }
  } else if (req.method === 'POST') {
    // Handle POST request logic here
    const { id, field, value } = req.body;

    if (req.method === 'POST') {
      const { id, field, value } = req.body;
      if (id && field && value) {
        // Parse the 'value' from string to JSON before updating
        const parsedValue = JSON.parse(value);
        const updateObject = { [field]: parsedValue };
  
        const { data, error } = await supabase
          .from('profiles')
          .update(updateObject)
          .eq('id', id);
  
        if (error) {
          return res.status(400).json({ error });
        }
        return res.status(200).json({ data });
      } else {
        return res.status(400).json({ error: 'Missing required parameters' });
      }
    }
  else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
}