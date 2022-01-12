// #region React
import React from 'react'
import PropTypes from 'prop-types'
// #endregion

const MenuOverlay = ({ show }) => (
  <div className={`offcanvas-overlay ${show ? 'active' : ''}`} />
)

// #region Khai báo Props
MenuOverlay.propTypes = {
  show: PropTypes.bool,
}

MenuOverlay.defaultProps = {
  show: false,
}
// #endregion

export default MenuOverlay
