// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import homeData from '../../data/home';
// #endregion

// #region Components
import { ReferenceList, SectionTitle } from '../../components';
// #endregion
// #endregion

const ReferenceAccordion = () => {
  // #region Parameters
  const refreences = homeData?.refreences || [];
  // #endregion

  return (
    <section className='blog-area blog-default-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <SectionTitle title='<span>Tài liệu tham khảo</span>' />
            <div className='post-items-style1' data-aos='fade-up' data-aos-duration='1100'>
              {refreences.map((reference, idx) => (
                <ReferenceList key={idx} data={reference} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceAccordion;
