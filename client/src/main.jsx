import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Client from './client.jsx';

// Mount <Client /> into the #root div from index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Client />
  </StrictMode>
);
