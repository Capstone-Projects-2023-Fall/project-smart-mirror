import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Mirror from '../page';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ refresh: jest.fn() })),
}));

jest.mock('../utils/supabase-client', () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        data: [{ mirrorID: '67ce79e9-b846-464c-bb44-1be8e0c9509a' }],
        error: null,
      })),
    })),
  },
}));

jest.mock('./spotify', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Spotify Component Mock</div>),
}));

jest.mock('./fitbit', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Fitbit Component Mock</div>),
}));

describe('Mirror component', () => {
  it('renders the login QR code when not logged in', () => {
    render(<Mirror />);
    expect(screen.getByText('Please scan QR Code on Project Lumina App')).toBeTruthy();
  });

  it('renders the clock and widgets when logged in', async () => {
    render(<Mirror />);
    await act(async () => {});
    // You may need to adjust the queries based on your actual component structure
    expect(screen.getByText('Clock Component')).toBeTruthy();
    expect(screen.getByText('Temperature Display Component')).toBeTruthy();
    expect(screen.getByText('News Display Component')).toBeTruthy();
    expect(screen.getByText('Spotify Component Mock')).toBeTruthy();
    expect(screen.getByText('Fitbit Component Mock')).toBeTruthy();
  });

});
