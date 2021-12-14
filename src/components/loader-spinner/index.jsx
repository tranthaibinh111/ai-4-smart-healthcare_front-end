/**
 * https://github.com/mhnpd/react-loader-spinner
 */
// #region ReactJS
import React from 'react';
// #endregion

// #region Package (third-party)
// Loader Spinner
import Loader from 'react-loader-spinner';
// #endregion

const LoaderSpinnerComponent = () => (
  <div className="loader-spinner">
    <Loader
      type="BallTriangle"
      color="#00BFFF"
      height={80}
      width={80}
    />
  </div>
);

export default LoaderSpinnerComponent;
