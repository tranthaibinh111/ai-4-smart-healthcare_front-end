// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const HealthFeature = ({ data }) => (
  <div className='media'>
    <div className='media-body'>
      <h4 className='title'>{data.title}</h4>
      <p>{data.subTitle}</p>
    </div>
    <span className={data.icon} />
  </div>
);

// #region Khai báo Props
HealthFeature.propTypes = {
  data: PropTypes.object,
};

HealthFeature.defaultProps = {
  data: null,
};
// #endregion

export default HealthFeature;
