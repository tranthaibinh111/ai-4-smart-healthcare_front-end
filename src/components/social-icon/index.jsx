// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const SocialIcon = ({ path, icon }) => (
  <a
    href={process.env.PUBLIC_URL + path}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={icon} />
  </a>
);

// #region Khai báo Props
SocialIcon.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.string,
};

SocialIcon.defaultProps = {
  path: '',
  icon: '',
};
// #endregion

export default SocialIcon;
