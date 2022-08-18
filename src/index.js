import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Navigation from "./navigation";
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
