// #region React
import React from 'react'
import PropTypes from 'prop-types'
// #endregion

// #region AI 4 Smart Healthcare
// Services
import { RootService } from '../../shared/services'

// #region Components
import SidebarKeyword from '../sidebar/sidebar-keyword'
import SidebarTitle from '../sidebar/sidebar-title'
import PdfViewer from '../pdf-viewer.component'
// #endregion
// #endregion

const ReferenceDetailsWrap = ({ data }) => {
  // #region Parameters
  const rootService = RootService()
  // #endregion

  return (
    <div className='blog-details-wrpa'>
      <div className='content'>
        {data && (
          <>
            <PdfViewer fileUrl={rootService.pdf(data?.slug)} />
            {data.keywords.length > 0 && <SidebarTitle title='Keywords' />}
            <SidebarKeyword data={data.keywords} />
          </>
        )}
      </div>
    </div>
  )
}

// #region Khai báo Props
ReferenceDetailsWrap.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    keywords: PropTypes.array.isRequired,
  }),
}

ReferenceDetailsWrap.defaultProps = {
  data: null,
}
// #endregion

export default ReferenceDetailsWrap
