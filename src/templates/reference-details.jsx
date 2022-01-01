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

// #region Containers
const Breadcrumb = React.lazy(() => import('../containers/global/breadcrumb'));
const BlogDetailsContainer = React.lazy(() => import('../containers/reference/reference-details'));
// #endregion
// #endregion

const ReferenceDetailsPage = ({
  match: {
    params: { id },
  },
}) => {
  // #region Parameters
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [data, setData] = useState(null);
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
    const blogs = BlogData.filter((blogItem) => blogItem.id === parseInt(id, 10));

    if (blogs.length > 0) {
      setData(blogs[0]);
      setTitle(blogs[0].title);
    }
  }, []);

  return (
    <>
      <Breadcrumb prevs={breadcrumbs} contentThree={title} />
      <BlogDetailsContainer data={data} />
    </>
  );
};

// #region Khai báo Props
ReferenceDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

ReferenceDetailsPage.defaultProps = {
  match: {
    params: {
      id: 0,
    },
  },
};
// #endregion

export default ReferenceDetailsPage;
