// #region React
import React, { useEffect } from 'react';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import homeData from '../data/home';
// #endregion

// #region Redux
import { setLayoutTitle, setHomeFlag, setMenu } from '../toolkit';
// #endregion

// #region Containers
const IntroContainer = React.lazy(() => import('../containers/home/intro'));
const HealthFeatureContainer = React.lazy(() => import('../containers/home/health-feature'));
const TeamContainer = React.lazy(() => import('../containers/home/team'));
const BlogAccordion = React.lazy(() => import('../containers/home/blog-accordion'));
const GoogleMapContainer = React.lazy(() => import('../containers/global/map'));
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
  }, []);

  return (
    <>
      <IntroContainer data={homeData.slider} />
      <HealthFeatureContainer data={homeData.healthFeature} />
      <TeamContainer data={homeData.team} />
      <BlogAccordion />
      <GoogleMapContainer />
    </>
  );
};

export default HomePage;
