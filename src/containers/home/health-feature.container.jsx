// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import homeData from '../../data/home';
// #endregion

// #region Components
import { HealthFeature } from '../../components';
// #endregion
// #endregion

const HealthFeatureContainer = () => {
  // #region Parameters
  const healthFeature = homeData?.healthFeature || [];
  // #endregion

  return (
    <section className='static-media'>
      <div className='container'>
        <div className='row mb-n4'>
          {healthFeature.map((single, key) => (
            <div key={key} className='col-lg-4 col-sm-6 mb-4'>
              <HealthFeature data={single} key={key} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthFeatureContainer;
