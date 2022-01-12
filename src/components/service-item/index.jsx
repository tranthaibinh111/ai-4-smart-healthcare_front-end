// #region React
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// #endregion

const ServiceItem = ({ data }) => (
  <div className='col-sm-6 col-md-6 col-lg-3 service-item'>
    <div className='icon'>
      <i className={data.icon} />
    </div>
    <div className='content'>
      <h5 className='service-name'>{data.title}</h5>
      <p>{data.excerpt}</p>
      <Link
        className='btn-link'
        to={`${process.env.PUBLIC_URL}/service-details/${data.id}`}
      >
        More <i className='icofont-simple-right' />
      </Link>
    </div>
  </div>
)

// #region Khai báo Props
ServiceItem.propTypes = {
  data: PropTypes.object,
}

ServiceItem.defaultProps = {
  data: [],
}
// #endregion

export default ServiceItem
