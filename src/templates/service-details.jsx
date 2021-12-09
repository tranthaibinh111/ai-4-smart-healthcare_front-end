// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import ServiceData from '../data/service.json';
// #endregion

// #region Components
import ScrollToTop from '../components/scroll-to-top';
import SEO from '../components/seo';
// #endregion

// #region Containers
import Breadcrumb from '../containers/global/breadcrumb';
import ServiceDetailsContainer from '../containers/service-details';
// #endregion

// #region Layout
import Layout from '../layouts';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
// #endregion
// #endregion

const ServiceDetails = ({
  match: {
    params: { id },
  },
}) => {
  // #region Parameters
  const serviceId = parseInt(id, 10);
  const data = ServiceData.filter((service) => service.id === serviceId);
  // #endregion

  return (
    <Layout>
      <SEO title="Hope – Service Details" />
      <div className="wrapper">
        <Header />
        <div className="main-content site-wrapper-reveal">
          <Breadcrumb
            prevs={[
              { text: 'Home', path: '/' },
              { text: 'Service', path: '/service' },
            ]}
            contentThree={data[0]?.title}
          />
          <ServiceDetailsContainer data={data[0]} />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </Layout>
  );
};

// #region Khai báo Props
ServiceDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

ServiceDetails.defaultProps = {
  match: {
    params: {
      id: 0,
    },
  },
};
// #endregion

export default ServiceDetails;
