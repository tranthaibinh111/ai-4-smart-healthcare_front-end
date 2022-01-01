// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import SectionTitle from '../../components/section-title';
import ReferenceList from '../../components/reference/reference-list';
// #endregion
// #endregion

const ReferenceAccordion = ({ data }) => (
  <section className="blog-area blog-default-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <SectionTitle title="<span>Tài liệu tham khảo</span>" />
          <div
            className="post-items-style1"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            {data.map((reference, idx) => <ReferenceList key={idx} data={reference} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// #region Khai báo Props
ReferenceAccordion.propTypes = {
  data: PropTypes.array.isRequired,
};
// #endregion

export default ReferenceAccordion;
