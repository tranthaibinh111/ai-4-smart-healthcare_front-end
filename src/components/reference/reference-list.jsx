// #region React
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// #endregion

// #region AI 4 Smart Healthcare
// Services
import { RootService } from '../../shared/services'
// #endregion

const ReferenceList = ({ data }) => {
  // #region Parameter
  const rootService = RootService()
  // #endregion

  const formatDate = (month, year) => {
    let strDate = ''

    if (month) strDate += month

    if (strDate) strDate += `/${year}`
    else strDate += year

    return strDate
  }

  return (
    <div className='post-item'>
      <div className='thumb'>
        <Link to={rootService.referenceDetails(data.slug)}>
          <img src={rootService.img(data.media.smallImage)} alt={data.title} />
        </Link>
      </div>
      <div className='content'>
        <h4 className='title'>
          <Link to={rootService.referenceDetails(data.slug)}>{data.title}</Link>
        </h4>
        <div className='meta'>
          {formatDate(data.month, data.year)}
          <span> – </span>
          {data.authors.slice(0, 3).map((author, idx) => {
            if (idx === 0) return author

            if (idx === 2) return ', ...'

            return `, ${author}`
          })}
        </div>
      </div>
    </div>
  )
}

// #region Khai báo Props
ReferenceList.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    month: PropTypes.string,
    media: PropTypes.shape({
      smallImage: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
// #endregion

export default ReferenceList
