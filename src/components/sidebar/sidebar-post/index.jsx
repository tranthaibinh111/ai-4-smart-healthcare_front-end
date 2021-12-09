// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

const SidebarPost = ({ data }) => (
  <div className="widget-blog-post">
    <ul>
      {data.map((single, i) => (
        <li key={i}>
          <div className="thumb">
            <img
              src={`${process.env.PUBLIC_URL}/${single.media.rcImage}`}
              alt="hope-Blog"
            />
          </div>
          <div className="content">
            <Link to={`${process.env.PUBLIC_URL}/blog-details/${single.id}`}>
              {single.title}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

// #region Khai báo Props
SidebarPost.propTypes = {
  data: PropTypes.array,
};

SidebarPost.defaultProps = {
  data: [],
};
// #endregion

export default SidebarPost;
