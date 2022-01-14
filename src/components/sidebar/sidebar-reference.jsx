// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// Utils
import { shortTitle } from '../../utils';
// Services
import { RootService } from '../../shared/services';
// #endregion

const SidebarReference = ({ data }) => {
  // #region Parameters
  const rootService = RootService();
  // #endregion

  return (
    <div className='widget-blog-post'>
      <ul>
        {data?.length > 0 &&
          data
            .filter((x) => x !== undefined)
            .map((item, idx) => (
              <li key={`sidebar-post-li-${idx}`}>
                <div className='thumb'>
                  <img src={rootService.img(item.media.rcImage)} alt={item.title} />
                </div>
                <div className='content'>
                  <Link
                    to={rootService.referenceDetails(item.slug)}
                    dangerouslySetInnerHTML={{
                      __html: shortTitle(item.title, 40),
                    }}
                  />
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};

// #region Khai báo Props
SidebarReference.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      media: PropTypes.shape({
        rcImage: PropTypes.string,
      }),
    })
  ),
};

SidebarReference.defaultProps = {
  data: [],
};
// #endregion

export default SidebarReference;
