// #region React
import React, { useState, useEffect } from 'react';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Redux
import { setLayoutTitle, setHomeFlag, setMenu } from '../toolkit';
// #endregion

// #region Containers
const Breadcrumb = React.lazy(() => import('../containers/global/breadcrumb'));
const BlogListContainer = React.lazy(() => import('../containers/blog/blog-list'));
// #endregion
// #endregion

const ReferencePage = () => {
  // #region Parameters
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  // Redux
  const dispatch = useDispatch();
  // #endregion

  useEffect(() => {
    const title = 'Tài liệu tham khảo';

    dispatch(setLayoutTitle(title));
    dispatch(setHomeFlag(false));
    dispatch(setMenu(title));
    setBreadcrumbs([{ text: 'Trang chủ', path: '/' }]);
  }, []);

  return (
    <>
      <Breadcrumb
        classOptionOne="content-style3"
        classOptionTwo="bread-crumbs-style2"
        prevs={breadcrumbs}
        contentThree="Blog"
        title="<span>Latest From</span> Our Blog"
      />
      <BlogListContainer />
    </>
  );
};

export default ReferencePage;
