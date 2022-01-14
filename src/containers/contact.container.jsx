// #region React
import React from 'react';
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import { ContactAddress, ContactForm, SectionTitle } from '../components';
// #endregion
// #endregion

const ContactContainer = () => (
  <section className='contact-area'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12' data-aos='fade-up' data-aos-duration='1200'>
          <ContactAddress />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='contact-form'>
            <SectionTitle
              classOption='text-center'
              subTitle='Liên hệ'
              title='<span>Tôi luôn sẵn sàng</span> để giúp đỡ bạn'
            />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactContainer;
