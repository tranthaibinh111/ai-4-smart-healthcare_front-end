// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import GoogleMap from '../../../components/map';
// #endregion
// #endregion

const GoogleMapContainer = ({ classOption }) => (
  <div className={`map-area ${classOption}`}>
    <GoogleMap />
  </div>
);

// #region Khai báo Props
GoogleMapContainer.propTypes = {
  classOption: PropTypes.string,
};

GoogleMapContainer.defaultProps = {
  classOption: 'map-area',
};
// #endregion

export default GoogleMapContainer;
