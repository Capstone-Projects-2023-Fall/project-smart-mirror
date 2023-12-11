import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Clock from '../clock';

let container: HTMLDivElement | null = null;

beforeEach(() => {
  // Set up a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Clean up on exiting
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
  }
});

test('renders without crashing', () => {
  act(() => {
    render(<Clock />, container);
  });

  expect(container?.textContent).toBeTruthy();
});

test('displays time and seconds', async () => {
  jest.useFakeTimers();

  act(() => {
    render(<Clock />, container);
  });

  // Advance the time by 1 second
  act(() => {
    jest.advanceTimersByTime(1000);
  });

  // Extract time and seconds from the container
  const [time, seconds] = container?.textContent?.split(' ') || ['', ''];

  // Expect time and seconds to be non-empty strings
  expect(time).toBeTruthy();
  expect(seconds).toBeTruthy();

  jest.useRealTimers();
});
