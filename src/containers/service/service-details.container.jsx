// #region React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { serviceDetailsData } from '../../data';
// #endregion

// #region Components
import {
  // Chart
  TimeSeriesChart,
  // Sidebar
  SidebarSubjects,
  SidebarTitle,
  // Service Deatils
  ServiceDetails,
} from '../../components';
// #endregion
// #endregion

const ServiceDetailsContainer = ({ slug }) => {
  // #region Parameters
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    if (!slug) return;

    setSubject(serviceDetailsData.subjects.find((x) => x.name == slug));
  }, [slug]);
  // #endregion

  return (
    <section className='department-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='department-wrpp'>
              <div className='sidebar-wrapper'>
                <div className='widget-item'>
                  <SidebarTitle title='Subjects' />
                  <SidebarSubjects data={serviceDetailsData.subjects} />
                </div>
              </div>

              <div className='department-content'>
                {subject && (
                  <>
                    <ServiceDetails title={serviceDetailsData.title} subject={subject} />

                    <div className='faq-area'>
                      <h2 className='title'>
                        Tín hiệu <span>EEG</span>
                      </h2>
                      <div className='accordian-content'>
                        <div className='row pb-24'>
                          <TimeSeriesChart subject={subject} />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// #region Khai báo Props
ServiceDetailsContainer.propTypes = {
  slug: PropTypes.string,
};

ServiceDetailsContainer.defaultProps = {
  slug: '',
};
// #endregion

export default ServiceDetailsContainer;
