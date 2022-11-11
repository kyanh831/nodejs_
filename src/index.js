import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'
import './styles/css/theme.css'
import './styles/css/adminStyles.css'

import './styles/js/theme'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>

  , document.getElementById('root'));

reportWebVitals();

