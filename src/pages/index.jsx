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
const IntroContainer = React.lazy(() => import('../containers/home/intro'));
const HealthFeatureContainer = React.lazy(() => import('../containers/home/health-feature'));
const MedicalFeatureContainer = React.lazy(() => import('../containers/home/medical-feature'));
const AppointmentContainer = React.lazy(() => import('../containers/home/appointment'));
const TeamContainer = React.lazy(() => import('../containers/home/team'));
const TestimonialContainer = React.lazy(() => import('../containers/home/testimonial'));
const BrandContainer = React.lazy(() => import('../containers/global/brand'));
const PricingContainer = React.lazy(() => import('../containers/global/pricing'));
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
      <IntroContainer />
      <HealthFeatureContainer />
      <MedicalFeatureContainer />
      <AppointmentContainer />
      <TeamContainer />
      <TestimonialContainer />
      <BrandContainer />
      <PricingContainer />
      <BlogAccordion />
      <GoogleMapContainer />
    </>
  );
};

export default HomePage;
