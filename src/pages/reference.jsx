// #region React
import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { referenceData } from '../data';
// #endregion

// #region Redux
import { setLayoutTitle, setHomeFlag, setMenu } from '../toolkit';
// #endregion

// #region Services
import { RootService } from '../shared/services';
// #endregion

// #region Containers
const Breadcrumb = React.lazy(() => import('../containers/global/breadcrumb'));
const ReferenceListContainer = React.lazy(() => import('../containers/reference/reference-list'));
// #endregion
// #endregion

// https://v5.reactrouter.com/web/example/query-parameters
const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const ReferencePage = () => {
  // #region Parameters
  const query = useQuery();
  const page = +query.get('page') || 1;

  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [pagination, setPagination] = useState({
    totalCount: 0,
    pageSize: 5,
    page: 1,
    totalPages: 1,
    previousPage: false,
    nextPage: false,
  });
  const [references, setReferences] = useState([]);

  // Redux
  const dispatch = useDispatch();

  // AI 4 Smart Healthcare
  // Service
  const rootService = RootService();

  const title = 'Tài liệu tham khảo';
  // #endregion

  useEffect(() => {
    // #region Header
    dispatch(setLayoutTitle(title));
    dispatch(setHomeFlag(false));
    dispatch(setMenu(title));
    setBreadcrumbs([{ text: 'Trang chủ', path: rootService.home }]);
    // #endregion

    // #region References
    setPagination({
      totalCount: referenceData.length,
      pageSize: pagination.pageSize,
      page,
      totalPages: Math.ceil(referenceData.length / pagination.pageSize),
      previousPage: page > 1,
      nextPage: page < referenceData.length,
    });
    setReferences(referenceData.slice(
      (page - 1) * pagination.pageSize,
      ((page - 1) * pagination.pageSize) + pagination.pageSize,
    ));
    // #endregion
  }, [page]);

  return (
    <>
      <Breadcrumb
        classOptionOne="content-style3"
        classOptionTwo="bread-crumbs-style2"
        prevs={breadcrumbs}
        contentThree={title}
        title={`${title} <span>(mới nhất)</span>`}
      />
      <ReferenceListContainer data={references} pagination={pagination} />
    </>
  );
};

export default ReferencePage;
