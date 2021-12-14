// #region React
import React, { useEffect } from 'react';
// #endregion

// #region Package (third-party)
import { useDispatch } from 'react-redux';
// #endregion

// #region AI 4 Smart Healthcare
// #region Redux
import { setLayoutTitle, setHomeFlag } from '../toolkit';
// #endregion

// #region Containers
const PageTitleContainer = React.lazy(() => import('../containers/global/page-title'));
const ServiceContainer = React.lazy(() => import('../containers/service-box'));
const TestimonialContainer = React.lazy(() => import('../containers/home/testimonial'));
const BrandContainer = React.lazy(() => import('../containers/global/brand'));
const PricingContainer = React.lazy(() => import('../containers/global/pricing'));
const CallToAction = React.lazy(() => import('../containers/global/call-to-action'));
// #endregion
// #endregion

const ServicePage = () => {
  // #region Parameters
  // Redux
  const dispatch = useDispatch();
  // #endregion

  useEffect(() => {
    dispatch(setLayoutTitle('Hope – Service'));
    dispatch(setHomeFlag(false));
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
      <PricingContainer pricingClassOption="noborder-line" />
      <CallToAction />
    </>
  );
};

export default ServicePage;
