// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
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

const ServiceDetailsContainer = ({ data }) => {
  // #region Parameters
  const subject = data.subjects[0];
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
                  <SidebarSubjects data={data.subjects} />
                </div>
              </div>

              <div className='department-content'>
                <ServiceDetails title={data.title} subject={subject} />

                <div className='faq-area'>
                  <h2 className='title'>
                    Tín hiệu <span>EEG</span>
                  </h2>
                  <div className='accordian-content'>
                    <div className='row pb-24'>
                      <div className='col-md-4 offset-md-4'>
                        <select className='form-control'>
                          <option value=''>Kênh</option>
                          {subject.channels.map((single, key) => (
                            <option key={key} value={key}>
                              {single}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='row pd-24'>
                        <TimeSeriesChart subject={subject} />
                      </div>
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
};

// #region Khai báo Props
ServiceDetailsContainer.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subjects: PropTypes.array,
  }),
};

ServiceDetailsContainer.defaultProps = {
  data: {
    subjects: [],
  },
};
// #endregion

export default ServiceDetailsContainer;
