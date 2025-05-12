import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/global.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/Auth/AuthProvider.jsx';
import { BabiesProvider } from './context/Babies/BabiesProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BabiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </BabiesProvider>
  </StrictMode>
);
