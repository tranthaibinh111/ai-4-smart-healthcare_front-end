// #region React
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Redux
import { setLayoutTitle, setHomeFlag, setMenu } from '../toolkit';
// #endregion

// #region Services
import { RootService } from '../shared/services';
// #endregion

// #region Containers
const Breadcrumb = React.lazy(() => import('../containers/global/breadcrumb'));
const ServiceDetailsContainer = React.lazy(() =>
  import('../containers/service/service-details.container')
);
// #endregion
// #endregion

const ServiceDetails = () => {
  // #region Parameters
  let { slug } = useParams();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  // Redux
  const dispatch = useDispatch();

  // Services
  const rootService = RootService();

  const title = 'Chẩn đoán';
  // #endregion

  useEffect(() => {
    dispatch(setLayoutTitle(title));
    dispatch(setHomeFlag(false));
    dispatch(setMenu(title));
    setBreadcrumbs([{ text: 'Trang chủ', path: rootService.home }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <>
      <Breadcrumb prevs={breadcrumbs} contentThree={title} />
      <ServiceDetailsContainer slug={slug} />
    </>
  );
};

export default ServiceDetails;
