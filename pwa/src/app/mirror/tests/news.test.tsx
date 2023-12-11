import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewsComponent from '../news';

jest.mock('next/image', () => ({ src, alt, width, height }: any) => (
  <img src={src} alt={alt} width={width} height={height} />
));

describe('NewsComponent', () => {
  it('renders loading state', () => {
    render(<NewsComponent />);
    expect(screen.getByText('Loading News...')).toBeTruthy();
  });

  it('renders error state', async () => {
    // Mock the fetch function to simulate an error
    jest.spyOn(global as any, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('Fake error')),
    );

    render(<NewsComponent />);
    await waitFor(() => {
      expect(screen.getByText('Error fetching data: Fake error')).toBeTruthy();
    });

    // Restore the original fetch function
    (global as any).fetch.mockRestore();
  });

  it('renders news items', async () => {
    // Mock the fetch function to return fake data
    const fakeData = {
      data: [
        { id: 1, snippet: 'News 1' },
        { id: 2, snippet: 'News 2' },
      ],
    };

    jest.spyOn(global as any, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeData),
        ok: true,
      }),
    );

    render(<NewsComponent />);
    await waitFor(() => {
      expect(screen.getByText('Top Stories')).toBeTruthy();
      expect(screen.getAllByTestId('news-item')).toHaveLength(2);
      expect(screen.getByText('News 1')).toBeTruthy();
      expect(screen.getByText('News 2')).toBeTruthy();
    });

    // Restore the original fetch function
    (global as any).fetch.mockRestore();
  });

  it('renders news items with correct image', async () => {
    // Mock the fetch function to return fake data
    const fakeData = {
      data: [
        { id: 1, snippet: 'News 1' },
      ],
    };

    jest.spyOn(global as any, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeData),
        ok: true,
      }),
    );

    render(<NewsComponent />);
    await waitFor(() => {
      const newsItem = screen.getByTestId('news-item');
      const image = newsItem.querySelector('img');
      expect(image).toBeTruthy();
      expect(image?.src).toContain('newsicon.svg');
      expect(image?.alt).toBe('News Icon');
    });

    // Restore the original fetch function
    (global as any).fetch.mockRestore();
  });
});
