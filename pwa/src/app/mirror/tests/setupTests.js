import '@testing-library/jest-dom/extend-expect';
import { createRoot } from 'react-dom';

const root = createRoot(document.createElement('div'));
root.render = root.hydrate;

global.createRoot = (container, options) => {
  return root.createRoot(container, options);
};