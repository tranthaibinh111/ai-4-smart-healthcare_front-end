// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const HeaderContactInfo = ({ icon, title, info }) => (
  <li className='media media-list'>
    <span className='media-icon'>
      <i className={icon} />
    </span>
    <div className='media-content'>
      <span className='media-sub-heading'>{title}</span>
      <span className='media-heading'>{info}</span>
    </div>
  </li>
);

// #region Khai báo Props
HeaderContactInfo.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
};

HeaderContactInfo.defaultProps = {
  icon: '',
  title: '',
  info: '',
};
// #endregion

export default HeaderContactInfo;
