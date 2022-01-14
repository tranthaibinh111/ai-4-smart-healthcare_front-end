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

const ReferenceGrid = ({ data }) => {
  // #region Parameters
  const rootService = RootService();
  // #endregion

  return (
    <div className='post-item'>
      <div className='thumb'>
        <Link to={rootService.referenceDetails(data.slug)}>
          <img src={rootService.img(data.media.gridImage)} alt={data.title} />
        </Link>
      </div>
      <div className='content'>
        <h4 className='title'>
          <Link to={rootService.referenceDetails(data.slug)}>{shortTitle(data.title, 40)}</Link>
        </h4>
      </div>
    </div>
  );
};

// #region Khai báo Props
ReferenceGrid.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    media: PropTypes.shape({
      gridImage: PropTypes.string,
    }),
  }),
};

ReferenceGrid.defaultProps = {
  data: {
    slug: null,
    title: null,
    media: {
      gridImage: null,
    },
  },
};
// #endregion

export default ReferenceGrid;
