import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Initialize Cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

// Helper method to run middleware
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

// API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Handling GET request
  if (req.method === 'GET') {
    // Extracting the access token from the Authorization header
    const accessToken = req.headers.authorization?.split(' ')[1];

    if (!accessToken) {
      return res.status(401).json({ error: 'No access token provided' });
    }

    try {
      // Fetching the currently playing track from Spotify
      const spotifyResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!spotifyResponse.ok) {
        // If the Spotify API call fails, return the error message
        const error = await spotifyResponse.json();
        return res.status(spotifyResponse.status).json({ error });
      }

      // If the Spotify API call is successful, parse the currently playing track data
      const currentlyPlaying = await spotifyResponse.json();
      console.log('Currently Playing Track Data:', currentlyPlaying);

      // Check if there is a track currently playing
      if (!currentlyPlaying.item) {
        return res.status(200).json({ message: 'No track currently playing' });
      }

      // Respond with the currently playing track data
      return res.status(200).json(currentlyPlaying);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    // Handle other methods not allowed
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
