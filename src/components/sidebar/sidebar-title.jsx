// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const SidebarTitle = ({ title, classOption }) => (
  <h4 className={`widget-title ${classOption}`}>{title}</h4>
);

// #region Khai báo Props
SidebarTitle.propTypes = {
  title: PropTypes.string,
  classOption: PropTypes.string,
};

SidebarTitle.defaultProps = {
  title: '',
  classOption: 'widget-title',
};
// #endregion

export default SidebarTitle;
