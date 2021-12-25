// #region React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import BlogData from '../data/blog.json';
// #endregion

// #region Redux
import { setLayoutTitle, setHomeFlag } from '../toolkit';
// #endregion

// utils
import { slugify } from '../utils';

// #region Containers
const Breadcrumb = React.lazy(() => import('../containers/global/breadcrumb'));
const BlogItemContainer = React.lazy(() => import('../containers/reference/reference-item'));
// #endregion
// #endregion

const BlogAuthor = ({
  match: {
    params: { author },
  },
}) => {
  // #region Parameters
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState(null);

  // Redux
  const dispatch = useDispatch();
  // #enderegion

  useEffect(() => {
    dispatch(setLayoutTitle('Hope – Blog Author'));
    dispatch(setHomeFlag(false));
    setBreadcrumbs([
      { text: 'Home', path: '/' },
      { text: 'Blog', path: '/blog' },
    ]);

    // Lấy dịch vụ theo ID
    const blogs = BlogData.filter((blog) => slugify(blog.author) === author);

    if (blogs.length > 0) {
      setData(blogs);
      setTitle(blogs[0].author);
    }
  }, []);

  return (
    <>
      <Breadcrumb prevs={breadcrumbs} contentThree={title} />
      <BlogItemContainer data={data} />
    </>
  );
};

// #region Khai báo Props
BlogAuthor.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      author: PropTypes.string,
    }),
  }),
};

BlogAuthor.defaultProps = {
  match: {
    params: {
      author: '',
    },
  },
};
// #endregion

export default BlogAuthor;
