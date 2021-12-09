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
import AboutContainer from '../containers/about';
// #endregion

// #region Layout
import Layout from '../layouts';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
// #endregion
// #endregion

const AboutPage = () => (
  <Layout>
    <SEO title="Hope – About" />
    <div className="wrapper">
      <Header />
      <div className="main-content site-wrapper-reveal">
        <PageTitleContainer
          image="img/photos/about-bg1.jpg"
          subTitle="Hope medical center"
          title="About <span>Hope</span>"
        />
        <AboutContainer />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  </Layout>
);

export default AboutPage;
