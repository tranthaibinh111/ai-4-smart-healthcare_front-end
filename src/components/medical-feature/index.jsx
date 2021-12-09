// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const MedicalFeature = ({ data }) => (
  <div className="icon-box-item">
    <div className="icon">
      <i className={data.icon} />
    </div>
    <div className="content">
      <h5 className="title">{data.title}</h5>
      <p>{data.excerpt}</p>
    </div>
  </div>
);

// #region Khai báo Props
MedicalFeature.propTypes = {
  data: PropTypes.object,
};

MedicalFeature.defaultProps = {
  data: null,
};
// #endregion

export default MedicalFeature;
