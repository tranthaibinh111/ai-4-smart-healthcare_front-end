// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import homeData from '../../../data/home';
// #endregion

// #region Components
import SectionTitle from '../../../components/section-title';
import PricingItem from '../../../components/pricing';
// #endregion
// #endregion

const PricingContainer = ({ pricingClassOption }) => (
  <div className="pricing-area pricing-default-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <SectionTitle
            classOption="text-center"
            subTitle="Pricing List"
            title="<span>Protect</span> With Health Care Card"
          />
        </div>
      </div>
      <div
        className={`row row-gutter-0 pricing-items-style1 ${pricingClassOption}`}
        data-aos="fade-up"
        data-aos-duration="1100"
      >
        {homeData.pricing
          && homeData.pricing.map((single, key) => (
            <div
              key={key}
              className="col-sm-6 col-md-6 col-lg-3"
            >
              <PricingItem key={key} data={single} />
            </div>
          ))}
      </div>
    </div>
  </div>
);

// #region Khai báo Props
PricingContainer.propTypes = {
  pricingClassOption: PropTypes.string,
};

PricingContainer.defaultProps = {
  pricingClassOption: 'row row-gutter-0 pricing-items-style1',
};
// #endregion

export default PricingContainer;
