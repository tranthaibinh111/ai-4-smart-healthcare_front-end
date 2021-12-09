// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import ScrollToTop from '../components/scroll-to-top';
import SEO from '../components/seo';
// #endregion

// #region Containers
import GoogleMapContainer from '../containers/global/map';
import ContactPageContainer from '../containers/contact';
// #endregion

// #region Layout
import Layout from '../layouts';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
// #endregion
// #endregion

const ContactPage = () => (
  <Layout>
    <SEO title="Hope – Contact" />
    <div className="wrapper">
      <Header />
      <div className="main-content site-wrapper-reveal">
        <GoogleMapContainer classOption="contact-map-area" />
        <ContactPageContainer />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  </Layout>
);

export default ContactPage;
