// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import SectionTitle from '../../../components/section-title';
import AppointmentForm from '../../../components/appointment-form';
// #endregion
// #endregion

const AppointmentContainer = () => (
  <section className="appointment-area bg-gray">
    <div className="appointment-form-style1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="appointment-form">
              <SectionTitle
                subTitle="We Alway Ready Helps you"
                title="<span>Book An</span> Appointment"
              />
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppointmentContainer;
