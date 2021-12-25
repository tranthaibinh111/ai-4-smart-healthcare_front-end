// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// utils
import { slugify } from '../../utils';

// #region AI 4 Smart Healthcare
// #region Data
import BlogData from '../../data/blog.json';
// #endregion

// #region Components
import SidebarKeyword from '../sidebar/sidebar-keyword';
// #endregion
// #endregion

const BlogDetailsWrap = ({ data }) => {
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
  return (
    <div className="blog-details-wrpa">
      <div className="content">
        <h2 className="title">{data.title}</h2>
        <img
          src={`${process.env.PUBLIC_URL}/${data.media.largeImage}`}
          alt="hope-Blog"
        />
        <div className="meta">
          {cate}
          <span>-</span>
          <Link
            className="author"
            to={`${process.env.PUBLIC_URL}/date/${slugify(data.date)}`}
          >
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
        {data.body.map((single, key) => (
          <div className="desc" key={key}>
            {single}
          </div>
        ))}
        <SidebarKeyword data={BlogData} />
      </div>
    </div>
  );
};

// #region Khai báo Props
BlogDetailsWrap.propTypes = {
  data: PropTypes.object,
};

BlogDetailsWrap.defaultProps = {
  data: null,
};
// #endregion

export default BlogDetailsWrap;
