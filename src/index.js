import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MoralisProvider } from 'react-moralis';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider
      appId={process.env.REACT_APP_MORALIS_ID}
      serverUrl={process.env.REACT_APP_MORALIS_URL}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
