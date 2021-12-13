// #region Package (third-party)
// #region Redux
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// #endregion
// #endregion

// #region ANN Shop
import { layoutReducer } from './toolkit';
// #endregion

export default configureStore({
  reducer: { layout: layoutReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
