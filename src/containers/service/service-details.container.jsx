// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import {
  // Chart
  TimeSeriesChart,
  // Diagnose
  Diagnose,
  // Sidebar
  SidebarSubjects,
  SidebarTitle,
  // Service Deatils
  ServiceDetails,
} from '../../components';
// #endregion
// #endregion

const ServiceDetailsContainer = ({ slug }) => (
  <section className='department-area'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='department-wrpp'>
            <div className='sidebar-wrapper'>
              <div className='widget-item'>
                <SidebarTitle title='Subjects' />
                <SidebarSubjects />
              </div>
            </div>

            <div className='department-content'>
              <ServiceDetails slug={slug} />

              <Diagnose slug={slug} />

              <div className='faq-area'>
                <h2 className='title'>
                  Tín hiệu <span>EEG</span>
                </h2>
                <div className='accordian-content'>
                  <div className='row pb-24'>
                    <TimeSeriesChart slug={slug} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// #region Khai báo Props
ServiceDetailsContainer.propTypes = {
  slug: PropTypes.string,
};

ServiceDetailsContainer.defaultProps = {
  slug: '',
};
// #endregion

export default ServiceDetailsContainer;
