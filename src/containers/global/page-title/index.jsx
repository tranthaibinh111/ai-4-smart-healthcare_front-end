// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Service
import { RootService } from '../../../shared/services';
// #endregion

// #region Components
import { PageTitle } from '../../../components';
// #endregion
// #endregion

const PageTitleContainer = ({ subTitle, title, image }) => {
  // #region Parameteres
  const rootService = RootService();
  // #endregion
  return (
    <div
      className='page-title-area bg-img bg-img-top'
      style={{ backgroundImage: `url(${rootService.img(image)}` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-xl-7 m-auto' data-aos='fade-up'>
            <PageTitle subTitle={subTitle} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

// #region Khai báo Props
PageTitleContainer.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
};

PageTitleContainer.defaultProps = {
  subTitle: '',
  title: '',
  image: '',
};
// #endregion

export default PageTitleContainer;
