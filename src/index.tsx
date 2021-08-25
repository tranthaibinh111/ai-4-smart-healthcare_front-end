//#region React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//#endregion

//#region Package (third-party)
//#region Redux
import { Provider } from 'react-redux';
//#endregion
//#endregion

//#region AI for smart healthcare
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';

//#region styles
import './index.scss';
// import "../node_modules/animate.css/animate.compat.css";
//#endregion
// configures
import config from './data/config';
// components
import App from './app/App';
//#endregion


const app = (
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={config.basename}>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
