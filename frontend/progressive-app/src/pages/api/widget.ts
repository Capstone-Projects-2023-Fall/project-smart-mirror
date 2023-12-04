import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { supabase } from '~/lib/supabase-client'; // Make sure this path is correct

const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
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

  if (req.method === 'GET') {
    const { user_id } = req.query;
    if (!user_id) {
      console.log("User ID not provided in GET request");
      return res.status(400).json({ error: 'User ID is required' });
    }
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('downloaded_modules')
        .eq('id', user_id);

      if (error) {
        console.error("Error fetching data from Supabase:", error);
        throw error;
      }
      
      console.log("Fetched data:", data);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    const { id, downloaded_modules } = req.body;
    console.log('Received update request:', id, downloaded_modules);
    if (!id || !downloaded_modules) {
      console.log("Missing parameters in POST request");
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({ downloaded_modules })
        .eq('id', id);

      if (error) {
        console.error("Error updating data in Supabase:", error);
        throw error;
      }

      console.log("Updated data:", data);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    console.log(`Method ${req.method} not allowed`);
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
