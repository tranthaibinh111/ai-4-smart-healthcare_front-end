// #region React
import React from 'react'
import PropTypes from 'prop-types'
// #endregion

const SidebarAuthors = ({ data }) => (
  <div className='widget-categories'>
    <ul>
      {data?.length > 0 &&
        data.map((item, idx) => (
          <li
            key={`widget-categories-li-${idx}`}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
    </ul>
  </div>
)

// #region Khai báo Props
SidebarAuthors.propTypes = {
  data: PropTypes.array,
}

SidebarAuthors.defaultProps = {
  data: [],
}
// #endregion

export default SidebarAuthors
