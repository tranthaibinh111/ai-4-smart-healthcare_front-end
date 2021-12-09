// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import ScrollToTop from '../components/scroll-to-top';
import SEO from '../components/seo';
// #endregion

// #region Containers
import PageTitleContainer from '../containers/global/page-title';
import ServiceContainer from '../containers/service-box';
import TestimonialContainer from '../containers/home/testimonial';
import BrandContainer from '../containers/global/brand';
import PricingContainer from '../containers/global/pricing';
import CallToAction from '../containers/global/call-to-action';
// #endregion

// #region Layout
import Layout from '../layouts';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
// #endregion
// #endregion

const ServicePage = () => (
  <Layout>
    <SEO title="Hope – Service" />
    <div className="wrapper">
      <Header />
      <div className="main-content site-wrapper-reveal">
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
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  </Layout>
);

export default ServicePage;
