// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

const ReferenceCard = ({ data }) => (
  <div className="post-item">
    <div className="thumb">
      <Link to={`${process.env.PUBLIC_URL}/blog-details/${data.id}`}>
        <img src={`${process.env.PUBLIC_URL}/${data.media.mediumImage}`} alt="hope-Blog" />
      </Link>
    </div>
    <div className="content">
      <h4 className="title">
        <Link to={`${process.env.PUBLIC_URL}/blog-details/${data.id}`}>
          {data.title}
        </Link>
      </h4>
      <div className="meta">
        {`${data.author} – ${data.date}`}
      </div>
    </div>
  </div>
);

// #region Khai báo Props
ReferenceCard.propTypes = {
  data: PropTypes.object,
};

ReferenceCard.defaultProps = {
  data: null,
};
// #endregion

export default ReferenceCard;
