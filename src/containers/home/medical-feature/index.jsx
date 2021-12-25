// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { homeData } from '../../../data';
// #endregion

// #region Components
import SectionTitle from '../../../components/section-title';
import MedicalFeature from '../../../components/medical-feature';
// #endregion
// #endregion

const MedicalFeatureContainer = () => (
  <section className="feature-section bg-white">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <SectionTitle
            subTitle="Why Choose hope Medical"
            title="<span>The Best</span> For Your Health"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xl-8">
          <div
            className="row icon-box-style"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            {homeData.medicalFeature
              && homeData.medicalFeature.map(
                (single, key) => (
                  <div key={key} className="col-md-6">
                    <MedicalFeature
                      key={key}
                      data={single}
                    />
                  </div>
                ),
              )}
          </div>
        </div>
      </div>
    </div>
    <div
      className="thumb"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <img
        src={`${process.env.PUBLIC_URL}./img/photos/doctor-01.png`}
        alt="hope"
      />
    </div>
  </section>
);

export default MedicalFeatureContainer;
