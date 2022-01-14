// #region React
import React, { useEffect } from 'react';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Redux
import { setLayoutTitle, setHomeFlag, setMenu } from '../toolkit';
// #endregion

// #region Containers
const IntroContainer = React.lazy(() => import('../containers/home/intro.container'));
const HealthFeatureContainer = React.lazy(() =>
  import('../containers/home/health-feature.container')
);
const TeamContainer = React.lazy(() => import('../containers/home/team.container'));
const ReferenceAccordion = React.lazy(() =>
  import('../containers/home/reference-accordion.container')
);
const GoogleMapContainer = React.lazy(() => import('../containers/global/map.container'));
// #endregion
// #endregion

const HomePage = () => {
  // #region Parameters
  // Redux
  const dispatch = useDispatch();
  // #endregion

  useEffect(() => {
    const title = 'Trang chủ';

    dispatch(setLayoutTitle(title));
    dispatch(setHomeFlag(true));
    dispatch(setMenu(title));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <IntroContainer />
      <HealthFeatureContainer />
      <TeamContainer />
      <ReferenceAccordion />
      <GoogleMapContainer />
    </>
  );
};

export default HomePage;
