// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const HeaderContactInfo = ({ data }) => (
  <li className="media media-list">
    <span className="media-icon">
      <i className={data.icon} />
    </span>
    <div className="media-content">
      <span className="media-sub-heading">{data.title}</span>
      <span className="media-heading">{data.info}</span>
    </div>
  </li>
);

// #region Khai báo Props
HeaderContactInfo.propTypes = {
  data: PropTypes.object,
};

HeaderContactInfo.defaultProps = {
  data: null,
};
// #endregion

export default HeaderContactInfo;
