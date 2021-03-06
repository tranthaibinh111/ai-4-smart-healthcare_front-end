// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import ServiceData from '../../data/service.json';
// #endregion

// #region Components
import { SectionTitle, ServiceItem } from '../../components';
// #endregion
// #endregion

const ServiceContainer = () => (
  <div className='service-area'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <SectionTitle
            classOption='text-center'
            subTitle='Our services'
            title='<span>Best Solution</span> For Your Health'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='row service-style2' data-aos='fade-up' data-aos-duration='1200'>
            {ServiceData &&
              ServiceData.map((single, key) => <ServiceItem key={key} data={single} />)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceContainer;
