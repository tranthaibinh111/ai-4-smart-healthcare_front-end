// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

const PricingItem = ({ data }) => (
  <div className={data.classOption}>
    <div className="pricing-title">
      <h5>{data.title}</h5>
    </div>
    <div className="pricing-amount">
      {data.price}
    </div>
    <div className="pricing-content">
      <p className="desc">{data.excerpt}</p>
      <ul className="pricing-list">
        {data.pricingList
          && data.pricingList.map((single, key) => (
            <li key={key}>
              <i className="icofont-check-circled" />
              {single}
            </li>
          ))}
      </ul>
    </div>
    <div className="pricing-footer">
      <Link className={data.btnClassOption} to="/">
        Get Started Now
      </Link>
    </div>
  </div>
);

// #region Khai báo Props
PricingItem.propTypes = {
  data: PropTypes.object,
};

PricingItem.defaultProps = {
  data: null,
};
// #endregion

export default PricingItem;
