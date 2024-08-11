import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopcontextProvider from './Context/Shopcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopcontextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route to Home component */}
        <Route path="/*" element={<App />} /> {/* All other routes handled by App */}
      </Routes>
    </BrowserRouter>
  </ShopcontextProvider>
);

reportWebVitals();
