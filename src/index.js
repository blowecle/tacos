import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Nav.css'
import App from './App';
import Nav from './Nav';
import Router from './Routes'
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import Construction from './Construction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>
);