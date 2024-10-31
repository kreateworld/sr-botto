import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <ThirdwebProvider 
        activeChain="ethereum"
        clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID || ""}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThirdwebProvider>
    </HelmetProvider>
  </StrictMode>
);