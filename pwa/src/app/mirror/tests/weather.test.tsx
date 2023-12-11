import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import TemperatureDisplay from '../weather';

jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
));

describe('TemperatureDisplay', () => {
  it('renders loading state initially', () => {
    render(<TemperatureDisplay />);

    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('renders error state when fetch fails', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Fake error'));

    render(<TemperatureDisplay />);

    await waitFor(() => {
      expect(screen.getByText('Error: Fake error')).toBeTruthy();
    });
  });

  it('renders weather data after successful fetch', async () => {
    const mockData = {
      city: 'Test City',
      temperature: 75,
      uvIndex: 5,
      weatherCode: 0,
      weatherDescription: 'Sunny',
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
    } as Response);

    render(<TemperatureDisplay />);

    await waitFor(() => {
      expect(screen.getByText('75°F')).toBeTruthy();
      expect(screen.getByText('Sunny')).toBeTruthy();
    });
  });

  it('fetches weather data periodically', async () => {
    const mockData = {
      city: 'Test City',
      temperature: 75,
      uvIndex: 5,
      weatherCode: 0,
      weatherDescription: 'Sunny',
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
    } as Response);

    render(<TemperatureDisplay />);

    await waitFor(() => {
      expect(screen.getByText('75°F')).toBeTruthy();
    });

    // Wait for the next fetch interval (assuming it's 60000 milliseconds)
    await act(async () => {
      jest.advanceTimersByTime(60000);
    });

    // Ensure the data is fetched again
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
});
