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
const ReferenceListContainer = React.lazy(() => import('../containers/reference/reference-list'));
// #endregion
// #endregion

const ReferencePage = () => {
  // #region Parameters
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  // Redux
  const dispatch = useDispatch();

  const title = 'Tài liệu tham khảo';
  // #endregion

  useEffect(() => {
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
        contentThree={title}
        title={`${title} <span>(mới nhất)</span>`}
      />
      <ReferenceListContainer />
    </>
  );
};

export default ReferencePage;
