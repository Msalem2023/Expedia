import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryContextProviver } from './context/queryContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryContextProviver>
    <App />
    </QueryContextProviver>
  </React.StrictMode>
);

