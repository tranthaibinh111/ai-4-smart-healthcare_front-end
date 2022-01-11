// #region React
import React, { useState, useEffect } from 'react';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { serviceDetailsData } from '../data';
// #endregion

// #region Redux
import { setLayoutTitle, setHomeFlag, setMenu } from '../toolkit';
// #endregion

// #region Services
import { RootService } from '../shared/services';
// #endregion

// #region Containers
const Breadcrumb = React.lazy(() => import('../containers/global/breadcrumb'));
const ServiceDetailsContainer = React.lazy(() => import('../containers/service/service-details'));
// #endregion
// #endregion

const ServiceDetails = () => {
  // #region Parameters
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  // Redux
  const dispatch = useDispatch();

  // Services
  const rootService = RootService();

  const title = 'Nghiên cứu';
  // #endregion

  useEffect(() => {
    dispatch(setLayoutTitle(title));
    dispatch(setHomeFlag(false));
    dispatch(setMenu(title));
    setBreadcrumbs([{ text: 'Trang chủ', path: rootService.home }]);
  }, []);

  return (
    <>
      <Breadcrumb prevs={breadcrumbs} contentThree={title} />
      <ServiceDetailsContainer data={serviceDetailsData} />
    </>
  );
};

export default ServiceDetails;
