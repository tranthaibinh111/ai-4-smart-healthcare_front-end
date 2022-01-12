// #region React
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// #endregion

const Brand = ({ data }) => (
  <div className='brand-logo-item'>
    <Link to='/'>
      <img src={process.env.PUBLIC_URL + data.image} alt='hope-Brand-Logo' />
    </Link>
  </div>
)

// #region Khai báo Props
Brand.propTypes = {
  data: PropTypes.object,
}

Brand.defaultProps = {
  data: null,
}
// #endregion

export default Brand
