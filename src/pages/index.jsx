// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import ScrollToTop from '../components/scroll-to-top';
import SEO from '../components/seo';
// #endregion

// #region Containers
import IntroContainer from '../containers/home/intro';
import HealthFeatureContainer from '../containers/home/health-feature';
import MedicalFeatureContainer from '../containers/home/medical-feature';
import AppointmentContainer from '../containers/home/appointment';
import TeamContainer from '../containers/home/team';
import TestimonialContainer from '../containers/home/testimonial';
import BrandContainer from '../containers/global/brand';
import PricingContainer from '../containers/global/pricing';
import BlogAccordion from '../containers/home/blog-accordion';
import GoogleMapContainer from '../containers/global/map';
// #endregion

// #region Layout
import Layout from '../layouts';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
// #endregion
// #endregion

const HomePage = () => (
  <Layout>
    <SEO title="Hope – Health &amp; Medical React JS Template" />
    <div className="wrapper home-default-wrapper">
      <Header />
      <div className="main-content site-wrapper-reveal">
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
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  </Layout>
);

export default HomePage;
