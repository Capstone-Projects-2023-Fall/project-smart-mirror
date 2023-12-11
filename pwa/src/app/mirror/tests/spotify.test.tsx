import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Spotify from '../spotify';

// Mock the global fetch function
global.fetch = jest.fn() as jest.Mock;

describe('Spotify component', () => {
  it('renders the component with the current track information', async () => {
    // Mock the fetch function to simulate a track playing
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ is_playing: true, item: { name: 'Test Track', artists: [{ name: 'Test Artist' }], album: { images: [{ url: 'test-image-url' }] } } }),
    });

    render(<Spotify id="test-id" />);
    
    // Wait for the component to update
    await act(async () => new Promise((resolve) => setTimeout(resolve, 5000)));

    // Check if the rendered text matches the expected track name and artist
    expect(screen.getByText('Test Track')).toBeTruthy();
    expect(screen.getByText('Test Artist')).toBeTruthy();
    
    // Check if the album cover is rendered
    expect(screen.getByAltText('Album cover for Test Track')).toBeTruthy();
  });

  it('renders a message when no track is playing', async () => {
    // Mock the fetch function to simulate no track playing
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ is_playing: false, item: null }),
    });

    render(<Spotify id="test-id" />);
    
    // Wait for the component to update
    await act(async () => new Promise((resolve) => setTimeout(resolve, 5000)));

    // Check if the "No track is currently playing." message is rendered
    expect(screen.getByText('No track is currently playing.')).toBeTruthy();
  });
});
