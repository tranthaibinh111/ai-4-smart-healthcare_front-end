// #region React
import React from 'react'
import PropTypes from 'prop-types'
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import HealthFeature from '../../../components/health-feature'
// #endregion
// #endregion

const HealthFeatureContainer = ({ data }) => (
  <section className='static-media'>
    <div className='container'>
      <div className='row mb-n4'>
        {data &&
          data.map((single, key) => (
            <div key={key} className='col-lg-4 col-sm-6 mb-4'>
              <HealthFeature data={single} key={key} />
            </div>
          ))}
      </div>
    </div>
  </section>
)

// #region Khai báo Props
HealthFeatureContainer.propTypes = {
  data: PropTypes.array.isRequired,
}
// #endregion

export default HealthFeatureContainer
