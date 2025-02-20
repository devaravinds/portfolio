import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';
import "@fontsource/poppins";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);