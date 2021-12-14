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
const BlogItemContainer = React.lazy(() => import('../containers/blog/blog-item'));
// #endregion
// #endregion

const BlogCategory = ({
  match: {
    params: { slug },
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
    dispatch(setLayoutTitle('Hope – Blog Category'));
    dispatch(setHomeFlag(false));
    setBreadcrumbs([
      { text: 'Home', path: '/' },
      { text: 'Blog', path: '/blog' },
    ]);

    // Lấy dịch vụ theo ID
    const blogs = BlogData.map((blog) => ({
      ...blog,
      categories: blog.categories.filter((cat) => slugify(cat) === slug),
    })).filter((blog) => blog.categories.length > 0);

    if (blogs.length > 0) {
      setData(blogs);
      setTitle(blogs[0].categories[0]);
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
BlogCategory.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

BlogCategory.defaultProps = {
  match: {
    params: {
      slug: '',
    },
  },
};
// #endregion

export default BlogCategory;
