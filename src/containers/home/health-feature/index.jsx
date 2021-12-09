// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import HomeData from '../../../data/home.json';
// #endregion

// #region Components
import HealthFeature from '../../../components/health-feature';
// #endregion
// #endregion

const HealthFeatureContainer = () => (
  <section className="static-media">
    <div className="container">
      <div className="row mb-n4">
        {HomeData[2].healthFeature
          && HomeData[2].healthFeature.map((single, key) => (
            <div
              key={key}
              className="col-lg-4 col-sm-6 mb-4"
            >
              <HealthFeature data={single} key={key} />
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default HealthFeatureContainer;
