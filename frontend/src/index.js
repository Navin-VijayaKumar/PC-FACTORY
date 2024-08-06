import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  Home  from './Pages/Home';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Shopcontext } from './Context/Shopcontext';
import ShopcontextProvider from './Context/Shopcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ShopcontextProvider>
    <App/>
  </ShopcontextProvider>
  </>

 
);

