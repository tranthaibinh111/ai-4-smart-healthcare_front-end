// #region React
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
// #endregion

const SEO = ({ title, helmetData }) => (
  <Helmet helmetData={helmetData}>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="robots" content="noindex, follow" />
    <meta
      name="description"
      content="Hope – Health &amp; Medical React JS Template"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
  </Helmet>
);

// #region Khai báo Props
SEO.propTypes = {
  helmetData: PropTypes.object.isRequired,
  title: PropTypes.string,
};

SEO.defaultProps = {
  title: '',
};
// #endregion

export default SEO;
