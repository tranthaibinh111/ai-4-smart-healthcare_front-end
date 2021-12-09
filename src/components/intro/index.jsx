// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
import Button from '../button';
// #endregion

const Intro = ({ data }) => (
  <div
    className="intro-section"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.backgroundImage})` }}
  >
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="slider-content">
            <p className="text animated delay1">
              {data.subTitle}
            </p>
            <h2 className="title animated delay2">
              {data.title}
            </h2>
            <Button
              path={`${process.env.PUBLIC_URL}/`}
              classOption="btn btn-danger me-3 animated delay1"
              text="Get a quote"
            />
            <Button
              path={`${process.env.PUBLIC_URL}/`}
              classOption="btn btn-outline-secondary animated delay2"
              text="our services"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// #region Khai báo Props
Intro.propTypes = {
  data: PropTypes.object,
};

Intro.defaultProps = {
  data: null,
};
// #endregion

export default Intro;
