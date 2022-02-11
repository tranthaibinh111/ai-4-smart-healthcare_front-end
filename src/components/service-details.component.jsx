// #region React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Services
import { SubjectService } from '../shared/services';
// #endregion
// #endregion

const ServiceDetails = ({ slug }) => {
  // #region Parameter
  const [subject, setSubject] = useState(null);

  const subjectService = SubjectService();
  // #endregion

  // #region API
  const getSubject = async (slug) => {
    const response = await subjectService.getSubject(slug);

    if (response.success) setSubject(response.data);
  };
  // #endregion

  useEffect(() => {
    if (!slug) return;

    getSubject(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <div className='service-wrap'>
      <h3 className='title'>
        Dữ liệu EEG{' '}
        <span>
          <a
            href='https://www.cs.colostate.edu/eeg/main/data/2011-12_BCI_at_CSU'
            target='_blank'
            rel='noreferrer'
          >
            (Colorado State University)
          </a>
        </span>
      </h3>
      <div className='content'>
        <div className='desc'>
          <h4>{`Đối tượng: ${subject?.name ?? ''}`}</h4>
        </div>
        <div className='row desc'>
          <div className='col-4 col-md-4'>
            <p>{`Thiết bị: ${subject?.device ?? ''}`}</p>
          </div>
          <div className='col-4 col-md-4'>
            <p>{`Sample Rate: ${subject?.sampleRate ?? ''}`}</p>
          </div>
          <div className='col-4 col-md-4'>
            <p>{`Protocol: ${subject?.protocol ?? ''}`}</p>
          </div>
        </div>
        <div className='row desc'>
          <div className='col-4 col-md-4'>
            <p>{`Địa điểm: ${subject?.location ?? ''}`}</p>
          </div>
          <div className='col-4 col-md-4'>
            <p>{`Thời gian test: ${subject?.date ?? ''}`}</p>
          </div>
          <div className='col-4 col-md-4'>
            <p>{`Tình trạng: ${subject?.impairment ?? ''}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// #region Khai báo Props
ServiceDetails.propTypes = {
  slug: PropTypes.string,
};

ServiceDetails.defaultProps = {
  slug: '',
};
// #endregion

export default ServiceDetails;
