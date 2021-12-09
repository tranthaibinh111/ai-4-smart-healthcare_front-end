// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const Layout = ({ children }) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
