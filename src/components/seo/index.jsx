// #region React
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
// #endregion

const SEO = ({ title }) => (
  <Helmet>
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
  title: PropTypes.string,
};

SEO.defaultProps = {
  title: '',
};
// #endregion

export default SEO;
