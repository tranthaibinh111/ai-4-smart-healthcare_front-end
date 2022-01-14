// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// Services
import { RootService } from '../../shared/services';
// #endregion

const ReferenceCard = ({ data }) => {
  // #region Parameter
  const rootService = RootService();
  // #endregion

  const formatDate = (month, year) => {
    let strDate = '';

    if (month) strDate += month;

    if (strDate) strDate += `/${year}`;
    else strDate += year;

    return strDate;
  };

  return (
    <div className='post-item'>
      <div className='thumb'>
        <Link to={rootService.referenceDetails(data.slug)}>
          <img src={rootService.img(data.media.mediumImage)} alt={data.title} />
        </Link>
      </div>
      <div className='content'>
        <h4 className='title'>
          <Link to={rootService.referenceDetails(data.slug)}>{data.title}</Link>
        </h4>
        <div className='meta'>
          {data.authors.slice(0, 3).map((author, idx) => {
            if (idx === 0) return author;

            if (idx === 2) return ', ...';

            return `, ${author}`;
          })}
          {' – '}
          {formatDate(data.month, data.year)}
        </div>
      </div>
    </div>
  );
};

// #region Khai báo Props
ReferenceCard.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    month: PropTypes.string,
    media: PropTypes.shape({
      mediumImage: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
// #endregion

export default ReferenceCard;
