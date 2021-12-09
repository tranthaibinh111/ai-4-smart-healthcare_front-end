// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const PageTitle = ({ subTitle, title }) => (
  <div className="page-title-content content-style2 text-center">
    <p>{subTitle}</p>
    <h4 className="title">
      {title}
    </h4>
  </div>
);

// #region Khai báo Props
PageTitle.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

PageTitle.defaultProps = {
  subTitle: '',
  title: '',
};
// #endregion
export default PageTitle;
