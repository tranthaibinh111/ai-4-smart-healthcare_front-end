// #region React
import React from 'react';
import ReactDOM from 'react-dom';
// #endregion

// Styles
import './assets/scss/style.scss';

// #region AI 4 Smart Healthcare
import App from './App';
// #endregion

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
