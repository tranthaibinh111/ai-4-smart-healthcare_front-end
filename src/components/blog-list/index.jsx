// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// utils
import { slugify } from '../../utils';

const BlogListItem = ({ data }) => {
  // #region Components
  const cate = data.categories.map((value, i) => (
    <Link
      className="category"
      to={`${process.env.PUBLIC_URL}/category/${slugify(value)}`}
      key={i}
    >
      {value}
      {i !== data.categories.length - 1 && ','}
    </Link>
  ));
  // #endregion

  return (
    <div className="post-item">
      <div className="thumb">
        <Link to={`${process.env.PUBLIC_URL}/blog-details/${data.id}`}>
          <img src={`${process.env.PUBLIC_URL}/${data.media.mediumImage}`} alt="hope-Blog" />
        </Link>
      </div>
      <div className="content">
        {cate}
        <h4 className="title">
          <Link to={`${process.env.PUBLIC_URL}/blog-details/${data.id}`}>
            {data.title}
          </Link>
        </h4>
        <div className="meta">
          <Link to={`${process.env.PUBLIC_URL}/date/${slugify(data.date)}`}>
            {data.date}
          </Link>
          <span>by</span>
          <Link
            className="author"
            to={`${process.env.PUBLIC_URL}/author/${slugify(data.author)}`}
          >
            {data.author}
          </Link>
        </div>
      </div>
    </div>
  );
};

// #region Khai báo Props
BlogListItem.propTypes = {
  data: PropTypes.object,
};

BlogListItem.defaultProps = {
  data: null,
};
// #endregion

export default BlogListItem;
