// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const ServiceDetails = ({ title, subject }) => (
  <div className="service-wrap">
    <h3 className="title" dangerouslySetInnerHTML={{ __html: title }} />
    <div className="content">
      <div className="desc">
        <h4>{`Đối tượng: ${subject.name}`}</h4>
      </div>
      <div className="row desc">
        <div className="col-4 col-md-4">
          <p>{`Thiết bị: ${subject.device}`}</p>
        </div>
        <div className="col-4 col-md-4">
          <p>{`Sample Rate: ${subject.sampleRate}`}</p>
        </div>
        <div className="col-4 col-md-4">
          <p>{`Protocol: ${subject.protocol}`}</p>
        </div>
      </div>
      <div className="row desc">
        <div className="col-4 col-md-4">
          <p>{`Địa điểm: ${subject.location}`}</p>
        </div>
        <div className="col-4 col-md-4">
          <p>{`Thời gian test: ${subject.date}`}</p>
        </div>
        <div className="col-4 col-md-4">
          <p>{`Tình trạng: ${subject.impairment}`}</p>
        </div>
      </div>
    </div>
  </div>
);

// #region Khai báo Props
ServiceDetails.propTypes = {
  title: PropTypes.string,
  subject: PropTypes.shape({
    protocol: PropTypes.string,
    sampleRate: PropTypes.number,
    device: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    impairment: PropTypes.string,
    name: PropTypes.string,
    channels: PropTypes.array,
    signals: PropTypes.arrayOf(PropTypes.string),
  }),
};

ServiceDetails.defaultProps = {
  title: '',
  subject: {
    protocol: '',
    sampleRate: 0,
    device: '',
    location: '',
    date: '',
    impairment: '',
    name: '',
    channels: [],
    signals: [],
  },
};
// #endregion

export default ServiceDetails;
