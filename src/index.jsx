// #region React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// #endregion

// #region Package (third-party)
// #region Redux
import { Provider } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
import store from './store';

// Styles
import './assets/scss/style.scss';
// Components
import App from './App';
// #endregion

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
