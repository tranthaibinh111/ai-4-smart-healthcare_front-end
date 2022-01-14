// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// Services
import { RootService } from '../shared/services';
// Component
import Button from './button.component';
// #endregion

const Intro = ({ data }) => {
  const rootService = RootService();

  return (
    <div
      className='intro-section'
      style={{
        backgroundImage: `url(${rootService.img(data.backgroundImage)})`,
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='slider-content'>
              <p className='text animated delay1'>{data.subTitle}</p>
              <h2
                className='title animated delay2'
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              <Button
                path={`${rootService.serviceDetails()}`}
                classOption='btn btn-danger me-3 animated delay1'
                text='Chẩn đoán'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// #region Khai báo Props
Intro.propTypes = {
  data: PropTypes.object,
};

Intro.defaultProps = {
  data: null,
};
// #endregion

export default Intro;
