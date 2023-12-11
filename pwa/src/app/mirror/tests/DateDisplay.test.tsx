import React from 'react';
import { render, screen, act } from '@testing-library/react';
import DateDisplay from '../DateDisplay';

// Mock the Date object to have a consistent date for testing
const mockDate = new Date('2023-01-15T12:34:56');
global.Date = jest.fn(() => mockDate) as any;

describe('DateDisplay component', () => {
  it('renders the current date', () => {
    render(<DateDisplay />);
    
    // Mocked date: January 15, 2023
    const expectedDate = '15 January';
    
    // Wait for the component to update
    act(() => jest.advanceTimersByTime(86400000));

    // Check if the rendered text matches the expected date
    expect(screen.getByText(expectedDate)).toBeTruthy();
  });
});
