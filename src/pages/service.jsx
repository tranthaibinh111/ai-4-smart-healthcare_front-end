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
const PageTitleContainer = React.lazy(() => import('../containers/global/page-title'));
const ServiceContainer = React.lazy(() => import('../containers/service-box'));
const TestimonialContainer = React.lazy(() => import('../containers/home/testimonial'));
const BrandContainer = React.lazy(() => import('../containers/global/brand'));
const CallToAction = React.lazy(() => import('../containers/global/call-to-action'));
// #endregion
// #endregion

const ServicePage = () => {
  // #region Parameters
  // Redux
  const dispatch = useDispatch();
  // #endregion

  useEffect(() => {
    const title = 'Chức năng';

    dispatch(setLayoutTitle(title));
    dispatch(setHomeFlag(false));
    dispatch(setMenu(title));
  }, []);

  return (
    <>
      <PageTitleContainer
        image="img/slider/main-slide-01.jpg"
        subTitle="Best solution for your heatlh"
        title="Services <span>That We Provide</span>"
      />
      <ServiceContainer />
      <TestimonialContainer />
      <BrandContainer />
      <CallToAction />
    </>
  );
};

export default ServicePage;
